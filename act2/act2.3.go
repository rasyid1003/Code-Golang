package main
import "fmt"
//farisrasyid
//2IA22
//50421483
const pi = 22 /7

var jari float64

func main() {
	fmt.Print("Masukan Jari-Jari Lingkaran = ")
	fmt.Scan(&jari)
	luas := pi * (jari * jari)
	fmt.Println("Luas Lingkaran = ", luas)
}