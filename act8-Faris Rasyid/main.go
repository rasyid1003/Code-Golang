package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("farisrasyid_50421483")))
	http.HandleFunc("/api/mahasiswa", user)
	fmt.Println("Server berjalan di port 8000")
	http.ListenAndServe(":8000", nil)
}

type lepkom struct {
	Nama   string `json:"nama_mahasiswa"`
	Kursus string `json:"kursus_mahasiswa"`
	Foto   string `json:"foto_mahasiswa"`
}

var data_mahasiswa = []lepkom{
	{
		Nama:   "Faris",
		Kursus: "Fundamental Web",
		Foto:   "img/gambar1.jpg",
	},
	{
		Nama:   "Rasyid",
		Kursus: "Golang for Beginner",
		Foto:   "img/gambar1.jpg",
	},
}

func user(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "application/json")

	if r.Method == http.MethodGet {
		result, err := json.Marshal(data_mahasiswa)

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Write(result)
		return
	}
}
