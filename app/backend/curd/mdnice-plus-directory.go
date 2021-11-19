package curd

import (
	"errors"
	"mdnice-plus/config"
	"mdnice-plus/model"
)

const (
	DirectoryExistsCode = iota + 10010
	DirectoryNotExistsCode
	DirectoryCreateFailedCode
	DirectoryUpdateFailedCode
)

var (
	DirectoryExists       = errors.New("directory exists")
	DirectoryNotExists    = errors.New("directory not exists")
	DirectoryCreateFailed = errors.New("directory create failed")
	DirectoryUpdateFailed = errors.New("directory update failed")
)

func AddDirectory(m *model.MdNicePlusDirectory) (int, error) {
	if err := config.Cursor.First(&model.MdNicePlusDirectory{}, `name = ? and parent = ?`, m.Name, m.Parent).Error; err == nil {
		return DirectoryExistsCode, DirectoryExists
	}
	if err := config.Cursor.Create(m).Error; err != nil {
		return DirectoryCreateFailedCode, DirectoryCreateFailed
	}
	return 0, nil
}

func EditDirectory(m *model.MdNicePlusDirectory) (int, error) {
	if err := config.Cursor.First(&model.MdNicePlusDirectory{}, `name = ? and parent = ?`, m.Name, m.Parent).Error; err != nil {
		return DirectoryNotExistsCode, DirectoryNotExists
	}
	if err := config.Cursor.Save(m).Error; err != nil {
		return DirectoryUpdateFailedCode, DirectoryUpdateFailed
	}
	return 0, nil
}

// ListDirectory get tree data
func ListDirectory() (int, interface{}, error) {
	return 0, nil, nil
}
