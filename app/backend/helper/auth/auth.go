package auth

import (
	"github.com/gin-gonic/gin"
	"mdnice-plus/helper/exception"
	"mdnice-plus/helper/jwt"
	"mdnice-plus/helper/request"
)

const (
	TokenCheckFailedCode = iota + 40010
	TokenNotFoundCode
)

var (
	TokenCheckFailed = exception.ErrString("token expired")
	TokenNotFound    = exception.ErrString("token not found")
)

func AuthMiddleware() gin.HandlerFunc {
	return func(context *gin.Context) {
		author := context.GetHeader("token")
		if author == "" {
			request.Failed(context, TokenNotFoundCode, TokenNotFound)
			context.Abort()
			return
		}
		token, err := jwt.ParseToken(author)
		if err != nil {
			request.Failed(context, TokenCheckFailedCode, TokenCheckFailed)
			context.Abort()
			return
		}
		context.Set("userId", token.ID)
		context.Set("userName", token.Username)
		context.Next()
	}
}
