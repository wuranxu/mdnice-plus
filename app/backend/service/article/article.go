package article

import (
	"encoding/base64"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"mdnice-plus/curd"
	"mdnice-plus/helper/pic"
	"mdnice-plus/helper/request"
	"mdnice-plus/model"
	"strconv"
)

const (
	QueryArticleErrorCode = 40020 + iota
	InsertArticleErrorCode
	UpdateArticleErrorCode
	DeleteArticleErrorCode
	FileUploadErrorCode
)

func QueryArticle(context *gin.Context) {
	articleId := context.Param("articleId")
	parseUint, err := strconv.ParseUint(articleId, 10, 64)
	if err != nil || parseUint == 0 {
		request.Failed(context, request.CheckParamsErrorCode, request.CheckParamsError)
		return
	}
	article, err := curd.QueryArticle(uint(parseUint))
	if err != nil {
		request.Failed(context, QueryArticleErrorCode, err)
		return
	}
	request.Success(context, article)
}

func InsertArticle(context *gin.Context) {
	data := new(model.MdNicePlusArticle)
	if err := request.CheckParams(context, data); err != nil {
		request.Failed(context, request.CheckParamsErrorCode, request.CheckParamsError)
		return
	}
	err := curd.InsertArticle(data.DirectoryID, data.Name)
	if err != nil {
		request.Failed(context, InsertArticleErrorCode, err)
		return
	}
	request.Success(context, nil)
}

func UpdateArticle(context *gin.Context) {
	data := new(model.MdNicePlusArticle)
	articleId, err := strconv.ParseUint(context.Param("articleId"), 10, 64)
	if err != nil {
		request.Failed(context, request.CheckParamsErrorCode, request.CheckParamsError)
		return
	}
	if err := request.CheckParams(context, data); err != nil {
		request.Failed(context, request.CheckParamsErrorCode, request.CheckParamsError)
		return
	}
	err = curd.UpdateArticle(uint(articleId), data.Name, data.Content)
	if err != nil {
		request.Failed(context, UpdateArticleErrorCode, err)
		return
	}
	request.Success(context, nil)
}

func DeleteArticle(context *gin.Context) {
	articleId, err := strconv.ParseUint(context.Param("articleId"), 10, 64)
	if err != nil {
		request.Failed(context, request.CheckParamsErrorCode, request.CheckParamsError)
		return
	}
	err = curd.DeleteArticle(uint(articleId))
	if err != nil {
		request.Failed(context, DeleteArticleErrorCode, err)
		return
	}
	request.Success(context, nil)
}

func InsertPicture(context *gin.Context) {
	file, err := context.FormFile("image")
	if err != nil {
		request.Failed(context, FileUploadErrorCode, err)
		return
	}
	open, err := file.Open()
	if err != nil {
		request.Failed(context, FileUploadErrorCode, err)
		return
	}
	data, err := ioutil.ReadAll(open)
	if err != nil {
		request.Failed(context, FileUploadErrorCode, err)
		return
	}
	img := base64.StdEncoding.EncodeToString(data)
	url, err := pic.DefaultGiteeRepo.CreateFile(img)
	if err != nil {
		request.Failed(context, FileUploadErrorCode, err)
		return
	}
	request.Success(context, url)
}
