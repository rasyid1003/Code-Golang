package main

import "fmt"
//Faris Rasyid
//50421483
//2IA22
var nilai1, nilai2, nilai3, nilai4, nilai5 float64

func main() {
	fmt.Print("Masukkan Nilai 1 = ") 
	fmt.Scan(&nilai1) 
	fmt.Print("Masukkan Nilai 2 = ") 
	fmt.Scan(&nilai2) 
	fmt.Print("Masukkan Nilai 3 = ") 
	fmt.Scan(&nilai3) 
	fmt.Print("Masukkan Nilai 4 = ") 
	fmt.Scan(&nilai4) 
	fmt.Print("Masukkan Nilai 5 = ") 
	fmt.Scan(&nilai5) 
	hasil := (nilai1 * nilai2) + nilai3 - (nilai4 / nilai5) 
	fmt.Printf("Hasil = (%.3f*%.3f)+%.3f-(%.3f / %.3f) = %.3f \n", nilai1, nilai2, nilai3, nilai4, nilai5, hasil)
}