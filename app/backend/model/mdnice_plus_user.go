package model

import (
	"mdnice-plus/config"
	"mdnice-plus/helper/jtime"
	t "time"
)

type MdNicePlusUser struct {
	Model
	Username    string         `gorm:"name:username;unique;not null" json:"username" validate:"required"`
	Password    string         `gorm:"name:password;type:varchar(24);not null" json:"password,omitempty" validate:"required"`
	LastLoginAt jtime.JSONTime `gorm:"name:last_login_at;type:timestamp" json:"last_login_at"`
	Type        int            `gorm:"name:type;type:smallint;not null;default 0;" json:"type"`
}

func (*MdNicePlusUser) TableName() string {
	return "mdnice_plus_user"
}

func NewUser(username, password string) *MdNicePlusUser {
	return &MdNicePlusUser{
		Username:    username,
		Password:    password,
		LastLoginAt: jtime.JSONTime{Time: t.Now()},
		Type:        0,
	}
}

func (m *MdNicePlusUser) InsertUser() error {
	return config.Cursor.Create(m).Error
}

func (m *MdNicePlusUser) UpdateUser() error {
	return config.Cursor.Save(m).Error
}

func (m *MdNicePlusUser) DeleteUser() error {
	return config.Cursor.Delete(m, `id = ?`, m.ID).Error
}

func (m *MdNicePlusUser) QueryUser(username, password string) *MdNicePlusUser {
	user := new(MdNicePlusUser)
	err := config.Cursor.First(user, `username = ? and password = ?`, username, password).Error
	if err != nil {
		return nil
	}
	return user
}
