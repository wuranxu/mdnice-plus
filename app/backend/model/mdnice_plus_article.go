package model

type MdNicePlusArticle struct {
	Model
	DirectoryID uint   `gorm:"column:directory_id;type:int;not null;unique_index:directory_name" json:"directory_id"`
	Name        string `gorm:"column:name;type:varchar(24);not null;unique_index:directory_name" json:"name" validate:"required"`
	Content     string `gorm:"name:content;type:text" json:"content"`
}
