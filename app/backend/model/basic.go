package model

import (
	"mdnice-plus/helper/time"
)

type Model struct {
	ID        uint           `gorm:"primary_key" json:"id"`
	CreatedAt time.JSONTime  `json:"created_at"`
	UpdatedAt time.JSONTime  `json:"updated_at"`
	DeletedAt *time.JSONTime `sql:"index" json:"deleted_at"`
}

var Tables = []interface{}{
	&MdNicePlusUser{},
}
