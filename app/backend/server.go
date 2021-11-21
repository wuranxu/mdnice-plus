package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"mdnice-plus/api/v1/article"
	"mdnice-plus/api/v1/directory"
	"mdnice-plus/api/v1/user"
	"mdnice-plus/config"
	"mdnice-plus/curd"
	"mdnice-plus/helper/auth"
)

func main() {
	config.Init("./config.json")
	curd.InitTables()
	app := gin.New()
	app.Use(cors.New(cors.Config{
		AllowAllOrigins: true,
		AllowMethods:    []string{"OPTION", "GET", "PUT", "POST", "DELETE", "PATCH"},
		AllowHeaders:    []string{"tus-resumable", "upload-length", "upload-metadata", "cache-control", "x-requested-with", "*"},
	}))
	user.NewRouter(app).AddRoute()
	// need auth
	app.Use(auth.AuthMiddleware())
	directory.NewRouter(app).AddRoute()
	article.NewRouter(app).AddRoute()
	app.GET("/", func(context *gin.Context) {
		context.JSON(200, "Hello, gin!")
	})
	defer config.Cursor.Close()
	app.Run("0.0.0.0:8888")
}
