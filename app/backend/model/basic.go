package model

import (
	"mdnice-plus/helper/jtime"
)

type Model struct {
	ID        uint            `gorm:"primary_key" json:"id"`
	CreatedAt jtime.JSONTime  `json:"created_at"`
	UpdatedAt jtime.JSONTime  `json:"updated_at"`
	DeletedAt *jtime.JSONTime `sql:"index" json:"deleted_at"`
}

var Tables = []interface{}{
	&MdNicePlusUser{},
	&MdNicePlusDirectory{},
	&MdNicePlusArticle{},
}
