package user

import (
	"github.com/gin-gonic/gin"
	"mdnice-plus/service/user"
)

type Router struct {
	app *gin.Engine
}

func NewRouter(engine *gin.Engine) *Router {
	return &Router{app: engine}
}

func (r *Router) AddRoute() {
	v1 := r.app.Group("/v1").Group("user")
	v1.POST("/register", user.RegisterUser)
}
