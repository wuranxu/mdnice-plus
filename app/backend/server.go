package main

import (
	"github.com/gin-gonic/gin"
	"mdnice-plus/api/v1/user"
	"mdnice-plus/config"
	"mdnice-plus/curd"
)

func main() {
	config.Init("D:\\projects\\github\\wuranxu\\mdnice-plus\\app\\backend\\config.json")
	curd.InitTables()
	app := gin.New()
	user.NewRouter(app).AddRoute()
	app.GET("/", func(context *gin.Context) {
		context.JSON(200, "Hello, gin!")
	})
	defer config.Cursor.Close()
	app.Run("0.0.0.0:8888")
}
