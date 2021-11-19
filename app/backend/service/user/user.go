package user

import (
	"errors"
	"github.com/gin-gonic/gin"
	"mdnice-plus/curd"
	"mdnice-plus/helper/jtime"
	"mdnice-plus/helper/jwt"
	"mdnice-plus/helper/request"
	"mdnice-plus/model"
)

const (
	ExistsErrorCode = 10000 + iota
	PasswordErrorCode
	ForbiddenErrorCode
	GenerateTokenErrorCode
	RegisterUserErrorCode
)

var (
	ExistsError        = errors.New("user exists")
	PasswordError      = errors.New("valid username or password")
	ForbiddenError     = errors.New("user is forbidden")
	GenerateTokenError = errors.New("generate token failed")
	RegisterUserError  = errors.New("register user failed")
)

// Register register user
func Register(context *gin.Context) {
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

func Login(context *gin.Context) {
	data := new(model.MdNicePlusUser)
	if err := request.CheckParams(context, data); err != nil {
		request.Failed(context, request.CheckParamsErrorCode, err)
		return
	}
	user := curd.QueryUser(data.Username, data.Password)
	if user == nil {
		request.Failed(context, PasswordErrorCode, PasswordError)
		return
	}
	if user.Type != 0 {
		// user is forbidden
		request.Failed(context, ForbiddenErrorCode, ForbiddenError)
		return
	}
	user.LastLoginAt = jtime.Now()
	token, err := jwt.GenerateToken(user)
	if err != nil {
		request.Failed(context, GenerateTokenErrorCode, GenerateTokenError)
		return
	}
	user.Password = ""
	request.Success(context, map[string]interface{}{"token": token, "user": user})
}
