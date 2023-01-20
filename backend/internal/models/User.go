package models

import "gorm.io/gorm"

type Users struct {
	gorm.Model
	Email    string `json:"email"`
	Name     string `json:"name"`
	Surname  string `json:"surname"`
	Password string `json:"password"`
}

type UserModel struct {
	Db *gorm.DB
}
