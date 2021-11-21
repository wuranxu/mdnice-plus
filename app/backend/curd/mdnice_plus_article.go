package curd

import (
	"errors"
	"fmt"
	"mdnice-plus/config"
	"mdnice-plus/model"
)

var (
	LeafError = errors.New("can't insert article to non leaf directory")
)

func QueryArticle(articleId uint) (ans model.MdNicePlusArticle, err error) {
	err = config.Cursor.First(&ans, `id = ?`, articleId).Error
	return
}

func InsertArticle(directoryId uint, name string) error {
	// if directory has son, return leaf error
	if err := config.Cursor.First(&model.MdNicePlusDirectory{}, `parent = ?`, directoryId).Error; err == nil {
		return LeafError
	}
	m := &model.MdNicePlusArticle{
		DirectoryID: directoryId,
		Name:        name,
	}
	return config.Cursor.Create(m).Error
}

func UpdateArticle(articleId uint, name, content string) error {
	article := new(model.MdNicePlusArticle)
	if err := config.Cursor.First(article, `id = ?`, articleId).Error; err != nil {
		return err
	}
	article.Content = content
	article.Name = name
	return config.Cursor.Save(article).Error
}

func DeleteArticle(articleId uint) error {
	return config.Cursor.Delete(model.MdNicePlusArticle{}, `id = ?`, articleId).Error
}

func ListArticle(directoryId uint) ([]TreeNode, error) {
	ans := make([]TreeNode, 0)
	temp := make([]model.MdNicePlusArticle, 0)
	if err := config.Cursor.Find(&temp, `directory_id = ?`, directoryId).Error; err != nil {
		return ans, err
	}
	for _, t := range temp {
		ans = append(ans, TreeNode{
			Key:      fmt.Sprintf("a_%v", t.ID),
			Title:    t.Name,
			Children: nil,
			Leaf:     true,
		})
	}
	return ans, nil
}
