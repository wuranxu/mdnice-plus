package curd

import (
	"mdnice-plus/config"
	"mdnice-plus/model"
)

func InitTables() {
	for _, table := range model.Tables {
		config.Cursor.AutoMigrate(table)
	}
}
