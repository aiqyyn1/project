package router

import (
	"backend/backend/controllers"
	"backend/backend/internal/models"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func SetupRouters() *gin.Engine {
	db := connectDB()

	Controller := controllers.Controller{
		User: &models.UserModel{Db: db},
	}

	r := gin.Default()
	r.Static("/public", "public")
	r.NoRoute(Controller.ShowMainPage)

	r.POST("/registration", Controller.Registration)
	r.GET("/Check", Controller.JsonGetTest)

	return r
}

func connectDB() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("backend/AbobaTube"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	return db
}
