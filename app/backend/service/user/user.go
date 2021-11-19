package user

import (
	"errors"
	"github.com/gin-gonic/gin"
	"mdnice-plus/curd"
	"mdnice-plus/helper/request"
	"mdnice-plus/model"
)

const (
	ExistsErrorCode = 10000 + iota
	RegisterUserErrorCode
)

var (
	ExistsError       = errors.New("user exists")
	RegisterUserError = errors.New("register user failed")
)

func RegisterUser(context *gin.Context) {
	data := new(model.MdNicePlusUser)
	if err := request.CheckParams(context, data); err != nil {
		request.Failed(context, request.CheckParamsErrorCode, err)
		return
	}
	user := curd.QueryUser(data.Username, data.Password)
	if user != nil {
		request.Failed(context, ExistsErrorCode, ExistsError)
		return
	}
	ans, err := curd.InsertUser(data.Username, data.Password)
	if err != nil {
		request.Failed(context, RegisterUserErrorCode, RegisterUserError)
		return
	}
	request.Success(context, ans)
}
