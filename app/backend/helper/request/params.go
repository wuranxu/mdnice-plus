package request

import (
	"github.com/gin-gonic/gin"
	"mdnice-plus/helper/exception"
	"mdnice-plus/helper/validate"
)

const (
	CheckParamsErrorCode = 40000 + iota
)

var CheckParamsError = exception.ErrString("get json params error")

func CheckParams(ctx *gin.Context, v interface{}) error {
	if err := ctx.ShouldBindJSON(v); err != nil {
		return err
	}
	if err := validate.Check(v, CheckParamsError); err != nil {
		return err
	}
	return nil
}
