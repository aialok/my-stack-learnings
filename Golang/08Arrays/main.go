package main

import "fmt"

func main() {
	fmt.Println("Arrays:")

	var fruitBasket [10]string

	// fruitBasket[0] = "Apple"
	fruitBasket[1] = "Banana"
	// fruitBasket[2] = "Orange"
	fruitBasket[3] = "Grape"
	fruitBasket[8] = "Apple"

	fmt.Println(fruitBasket)
	fmt.Println((len(fruitBasket)))

	var vegBasket = [5]string{"Potato", "Tomato", "Onion", "Carrot", "Cucumber"}

	fmt.Println(vegBasket)

}
