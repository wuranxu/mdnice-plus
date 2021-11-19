package request

import "github.com/gin-gonic/gin"

const (
	ErrMessage     = "operate failed"
	SuccessMessage = "operate success"
)

func getErrorData(msg ...error) (ans interface{}) {
	if msg[0] == nil {
		ans = nil
	} else {
		ans = msg[0].Error()
	}
	return
}

func errorResp(code int, msg ...error) map[string]interface{} {
	if len(msg) == 0 {
		return map[string]interface{}{
			"errcode": code,
			"errmsg":  ErrMessage,
		}
	}
	return map[string]interface{}{
		"errcode": code,
		"errmsg":  getErrorData(msg...),
	}
}

func successResp(data interface{}, msg ...error) map[string]interface{} {
	if len(msg) == 0 {
		return map[string]interface{}{
			"errcode": 0,
			"data":    data,
			"errmsg":  SuccessMessage,
		}
	}
	return map[string]interface{}{
		"errcode": 0,
		"data":    data,
		"errmsg":  getErrorData(msg...),
	}
}

func Success(ctx *gin.Context, data interface{}, msg ...error) {
	ctx.JSON(200, successResp(data, msg...))
}

func Failed(ctx *gin.Context, code int, msg ...error) {
	ctx.JSON(200, errorResp(code, msg...))
}
