package main
// ------------------------------------------
// copyright 2022@ http://farisrasyid.my.id|
// farisrasyid-50421483-2IA22              |   
// ------------------------------------------
import "fmt"

func main() {
	var data = map[string]mahasiswa{
		"50421483" : {
			"FARIS RASYID",
			"2IA22",
		},
		"16002036" : {
			"MUHAMMAD GEDE OKE",
			"2IA22",
		},
		"16002037" : {
			"RASYID AJA",
			"2IA22",
		},
		"16002038" : {
			"Bangs Obenk",
			"2IA22",
		},
	}
	var search string
	fmt.Print("Masukan Npm Anda ??")
	fmt.Scanf("%s", &search)


	var value, ok = data[search]

	if ok {
		fmt.Printf("Nama anda %s \nkelas anda %s", value.Nama, value.Kelas)
	}else{
		fmt.Println("data tidak sesuai !")
	}
}

type mahasiswa struct{
	Nama string
	Kelas string
}

