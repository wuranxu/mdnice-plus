package config

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	jsoniter "github.com/json-iterator/go"
	"io/ioutil"
)

var (
	Cursor *gorm.DB
	Config = new(ServerConfig)
)

type DatabaseConfig struct {
	Host     string `json:"host"`
	Port     int    `json:"port"`
	User     string `json:"user"`
	Password string `json:"password"`
	DbName   string `json:"db_name"`
}

func (*DatabaseConfig) dialect() string {
	return fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?parseTime=true&charset=utf8mb4&loc=Local",
		Config.Database.User, Config.Database.Password, Config.Database.Host, Config.Database.Port, Config.Database.DbName)
}

type ServerConfig struct {
	Database DatabaseConfig `json:"database"`
}

func Init(filepath string) {
	bts, err := ioutil.ReadFile(filepath)
	if err != nil {
		panic("config file not exists")
	}
	if err = jsoniter.Unmarshal(bts, Config); err != nil {
		panic("parse config file failed")
	}
	initDatabase()
}

func initDatabase() {
	var err error
	Cursor, err = gorm.Open("mysql", Config.Database.dialect())
	if err != nil {
		panic("init database connect failed")
	}
	Cursor.LogMode(true)
}
