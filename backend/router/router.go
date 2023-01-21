package router

import (
	"backend/backend/controllers"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func SetupRouters() *gin.Engine {
	db, err := gorm.Open(sqlite.Open("backend/AbobaTube"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	Controller := controllers.Controller{Db: db}
	r := gin.Default()
	r.Static("/", "../../public/")
	r.POST("/registration", Controller.Registration)

	return r
}
