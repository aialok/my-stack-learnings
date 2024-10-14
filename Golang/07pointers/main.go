package main

import "fmt"

func main() {
	myNumber := 10

	var ptr = &myNumber

	fmt.Println("Value of myNumber is: ", myNumber)
	fmt.Println("Address of myNumber is: ", &myNumber)
	fmt.Println("Value of ptr is: ", ptr)
	fmt.Println("Value of *ptr is: ", *ptr)

	*ptr = 20
	fmt.Println("Value of myNumber is: ", myNumber)
	fmt.Println("Value of *ptr is: ", *ptr)

}
