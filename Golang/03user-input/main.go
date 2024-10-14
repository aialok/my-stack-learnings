package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {

	var welcomeMessage string = "Welcome to pizza.com"
	fmt.Println(welcomeMessage)

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Please rate our pizza from 1 to 5: ")

	// comma ok || error ok

	input, _ := reader.ReadString('\n')
	fmt.Println("Thanks for rating our pizza: ", input)
}
