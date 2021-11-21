package article

import (
	"github.com/gin-gonic/gin"
	"mdnice-plus/service/article"
)

type Router struct {
	app *gin.Engine
}

func NewRouter(engine *gin.Engine) *Router {
	return &Router{app: engine}
}

func (r *Router) AddRoute() {
	v1 := r.app.Group("/v1").Group("article")
	v1.PUT("/", article.InsertArticle)
	v1.GET("/:articleId", article.QueryArticle)
	v1.POST("/:articleId", article.UpdateArticle)
	v1.DELETE("/:articleId", article.DeleteArticle)
}
