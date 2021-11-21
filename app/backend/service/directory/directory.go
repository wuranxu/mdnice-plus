package directory

import (
	"github.com/gin-gonic/gin"
	"mdnice-plus/curd"
	"mdnice-plus/helper/request"
	"mdnice-plus/model"
)

// CreateDirectory create directory
func CreateDirectory(context *gin.Context) {
	data := new(model.MdNicePlusDirectory)
	data.UserId = request.GetUserId(context)
	if err := request.CheckParams(context, data); err != nil {
		request.Failed(context, request.CheckParamsErrorCode, err)
		return
	}
	errcode, err := curd.AddDirectory(data)
	if err != nil {
		request.Failed(context, errcode, err)
		return
	}
	request.Success(context, nil)
}

// UpdateDirectory create directory
func UpdateDirectory(context *gin.Context) {
	data := new(model.MdNicePlusDirectory)
	data.UserId = request.GetUserId(context)
	if err := request.CheckParams(context, data); err != nil {
		request.Failed(context, request.CheckParamsErrorCode, err)
		return
	}
	errcode, err := curd.EditDirectory(data)
	if err != nil {
		request.Failed(context, errcode, err)
		return
	}
	request.Success(context, nil)
}

// ListDirectory list directory tree
func ListDirectory(context *gin.Context) {
	data := make([]curd.TreeNode, 0, 0)
	userId := request.GetUserId(context)
	errcode, result, err := curd.ListDirectory(userId, data, 0)
	if err != nil {
		request.Failed(context, errcode, err)
		return
	}
	request.Success(context, result)
}
