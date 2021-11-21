package curd

import (
	"errors"
	"fmt"
	"github.com/jinzhu/gorm"
	"mdnice-plus/config"
	"mdnice-plus/model"
)

const (
	DirectoryExistsCode = iota + 10010
	DirectoryNotExistsCode
	DirectoryCreateFailedCode
	DirectoryUpdateFailedCode
	ListDirectoryErrorCode
	ListArticleErrorCode
)

var (
	DirectoryExists       = errors.New("directory exists")
	DirectoryNotExists    = errors.New("directory not exists")
	DirectoryCreateFailed = errors.New("directory create failed")
	DirectoryUpdateFailed = errors.New("directory update failed")
	ListDirectoryError    = errors.New("list directory failed")
	ListArticleError      = errors.New("list directory article failed")
)

type TreeNode struct {
	Key      string     `json:"key"`
	Title    string     `json:"title"`
	Children []TreeNode `json:"children"`
	Leaf     bool       `json:"isLeaf"`
}

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
	temp := &model.MdNicePlusDirectory{}
	if err := config.Cursor.First(temp, `id = ?`, m.ID).Error; err != nil {
		return DirectoryNotExistsCode, DirectoryNotExists
	}
	temp.Name = m.Name
	if err := config.Cursor.Save(temp).Error; err != nil {
		return DirectoryUpdateFailedCode, DirectoryUpdateFailed
	}
	return 0, nil
}

// ListDirectory get tree data
func ListDirectory(userId uint, tree []TreeNode, parent uint) (int, []TreeNode, error) {
	ans := make([]model.MdNicePlusDirectory, 0)
	if err := config.Cursor.Find(&ans, "user_id = ? and parent = ?", userId, parent).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return 0, []TreeNode{}, nil
		}
		return ListDirectoryErrorCode, []TreeNode{}, ListDirectoryError
	}
	for _, record := range ans {
		temp := make([]TreeNode, 0, 0)
		code, children, err := ListDirectory(userId, temp, record.ID)
		if err != nil {
			return code, children, err
		}
		if len(children) == 0 {
			articles, err := ListArticle(record.ID)
			if err != nil {
				return ListArticleErrorCode, children, ListArticleError
			}
			tree = append(tree, TreeNode{
				Key:      fmt.Sprintf("%d", record.ID),
				Title:    record.Name,
				Children: articles,
			})
		} else {
			tree = append(tree, TreeNode{
				Key:      fmt.Sprintf("%d", record.ID),
				Title:    record.Name,
				Children: children,
			})
		}

	}
	return 0, tree, nil
}
