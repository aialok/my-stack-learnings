package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Hello World")

	presentTime := time.Now()
	fmt.Println(presentTime.Format("02-02-2006 15:04:05"))

}
