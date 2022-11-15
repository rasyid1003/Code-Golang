package main

import "fmt"
//farisrasyid
//2IA22
//50421483
var nilai1, nilai2 float64

func main() {
	defer fmt.Println("---SELESAI---")
	fmt.Print("Masukan Bilangan 1:")
	fmt.Scan(&nilai1)
	fmt.Print("Masukan Bilangan 2:")
	fmt.Scan(&nilai2)
	hasil := nilai1 / nilai2
	fmt.Printf("Hasil dari Niali1 / Nilai2 = %.3f\n", hasil)
	
}