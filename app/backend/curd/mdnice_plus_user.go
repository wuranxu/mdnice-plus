package curd

import "mdnice-plus/model"

// QueryUser query user by username and password
func QueryUser(username, password string) *model.MdNicePlusUser {
	return new(model.MdNicePlusUser).QueryUser(username, password)
}

func InsertUser(username, password string) (*model.MdNicePlusUser, error) {
	user := model.NewUser(username, password)
	err := user.InsertUser()
	if err != nil {
		return nil, err
	}
	return user, nil
}
