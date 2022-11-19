package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	PORT := 8181
	http.Handle("/", http.FileServer(http.Dir("polymer")))
	fmt.Printf("Server Running on Port %d", PORT)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", PORT), nil))
}
