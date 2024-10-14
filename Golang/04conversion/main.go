package main

import (
	"fmt"
)

func main() {
	fmt.Println("Welcome to the pizza shop!")
	fmt.Println("Please rate our pizza from 1 to 5: ")

	var name string
	fmt.Scan(&name)

	var rating int
	fmt.Scan(&rating)

	// reader := bufio.NewReader(os.Stdin)
	// rating, _ := reader.ReadString('\n')

	fmt.Println("Thank you for rating our pizza ", name, "  with", rating, "stars!")
	fmt.Printf("Type of rating: %T \n", rating)

}
