package controllers

import (
	"backend/backend/internal/models"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"log"
	"net/http"
)

type Controller struct {
	Db *gorm.DB
}

type User struct {
	Email    string `form:"email" binding:"required"`
	Password string `form:"password" binding:"required"`
	Name     string `form:"name" binding:"required"`
	Surname  string `form:"surname" binding:"required"`
}

func (ctrl *Controller) Registration(c *gin.Context) {
	var user User
	if err := c.ShouldBind(&user); err != nil {
		c.String(http.StatusBadRequest, "Error")
		return
	}
	if ctrl.SaveToDatabase(user.Name, user.Password, user.Email, user.Password) {
		c.SetCookie("Email", user.Email, 3600, "/", "localhost", false, true)
		c.SetCookie("Password", user.Password, 3600, "/", "localhost", false, true)
		c.SetCookie("Name", user.Name, 3600, "/", "localhost", false, true)
		c.SetCookie("Surname", user.Surname, 3600, "/", "localhost", false, true)
		c.String(200, "Done")
	} else {
		c.String(http.StatusBadRequest, "Email already registered")
	}
}

func (ctrl *Controller) SaveToDatabase(name, surname, email, password string) bool {
	newUser := models.Users{Name: name, Surname: surname, Email: email, Password: password}
	userModel := models.UserModel{Db: ctrl.Db}

	existUser, _ := userModel.FindOne(newUser.Email)

	if existUser == nil {
		err := userModel.Create(newUser)
		if err != nil {
			log.Printf("Error creating user: %v", err)
			return false
		}
		return true
	}
	return false
}
func (ctrl *Controller) ShowMainPage(c *gin.Context)  {
	c.File("public\\index.html")
}


