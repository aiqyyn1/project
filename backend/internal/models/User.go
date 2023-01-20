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

func (m *UserModel) Create(user Users) error {
	result := m.Db.Create(&user)
	return result.Error
}

func (m *UserModel) FindOne(email string) (*Users, error) {
	existUser := Users{}
	result := m.Db.First(&existUser, Users{Email: email})
	if result.Error != nil {
		return nil, result.Error
	}
	return &existUser, nil
}
