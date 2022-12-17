package main
//farisrasyid
//50421483
import "fmt"

func main() {
	var i int = 1
	var j int

	for {
		fmt.Print("Input Nilai I :")
		fmt.Scan(&j)
		i++
			if j%2 == 0 {
				fmt.Println(j, "Adalah Bilangan Genap\n")
			} else if j%2 != 0 {
				fmt.Println(j, "Adalah Bilangan Ganjil\n")
			} else {
				fmt.Println("Something Wrong!")
			}
			j = j + 1
		if i > 10 {
			fmt.Print("Pertanyaan Selesai, Karena Angka yang di input sudah melebihi dari 10. Terimkasih")
			break
		}
	}
}
	