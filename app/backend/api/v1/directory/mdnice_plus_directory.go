package directory

import (
	"github.com/gin-gonic/gin"
	"mdnice-plus/service/directory"
)

type Router struct {
	app *gin.Engine
}

func NewRouter(engine *gin.Engine) *Router {
	return &Router{app: engine}
}

func (r *Router) AddRoute() {
	v1 := r.app.Group("/v1").Group("directory")
	v1.POST("/create", directory.CreateDirectory)
	v1.POST("/update", directory.UpdateDirectory)
	v1.GET("/list", directory.ListDirectory)
}
