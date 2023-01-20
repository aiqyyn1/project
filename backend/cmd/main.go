package main

import "backend/backend/router"

func main() {
	r := router.SetupRouters()
	r.Run()
}
