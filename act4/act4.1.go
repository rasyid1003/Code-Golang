package main
// ------------------------------------------
// copyright 2022@ http://farisrasyid.my.id|
// farisrasyid-50421483-2IA22              |   
// ------------------------------------------
import "fmt"

func main() {
	var gajiSekarang, ekspetasiGaji int

	fmt.Print("Masukan gaji anda :" )
	fmt.Scan(&gajiSekarang)

	fmt.Print("Masukan gaji yg anda inginkan :")
	fmt.Scan(&ekspetasiGaji)

	naikanGaji(gajiSekarang, ekspetasiGaji)

	fmt.Printf("\nGaji anda sekarang %d\n",ekspetasiGaji)
}

func naikanGaji(gajiAwal int,gajiAkhir int ) {
	gajiAwal = gajiAkhir
}