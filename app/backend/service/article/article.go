package article

import (
	"github.com/gin-gonic/gin"
	"mdnice-plus/curd"
	"mdnice-plus/helper/request"
	"mdnice-plus/model"
	"strconv"
)

const (
	QueryArticleErrorCode = 40020 + iota
	InsertArticleErrorCode
	UpdateArticleErrorCode
	DeleteArticleErrorCode
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
