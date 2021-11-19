package model

type MdNicePlusDirectory struct {
	Model
	UserId uint   `gorm:"name:user_id;unique_index:parent_name_userid;type:int;not null" validate:"required"`
	Parent uint   `gorm:"name:parent;unique_index:parent_name_userid;not null;default 0" json:"parent"`
	Name   string `gorm:"name:name;unique_index:parent_name_userid;not null" json:"name" validate:"required"`
}

func (*MdNicePlusDirectory) TableName() string {
	return "mdnice_plus_directory"
}
