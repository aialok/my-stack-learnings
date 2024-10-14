package main

import "fmt"

// Public variable - we declare public variables with the first letter as capital
// If we declare a variable with the first letter as small, it will be private to the package

var GlobalVariable string = "I am a global"

var globalVariable string = "I am a global"

func main() {
	var username string = "Alok Gupta"
	var age int = 21
	var isStudent bool = true
	var marks float32 = 90.5
	var grade byte = 'A'

	// %T is used to print the type of the variable
	fmt.Println("----------------------------")
	fmt.Println("Explicit type declaration")
	fmt.Println("----------------------------")

	fmt.Printf("type of username: %T \n", username)
	fmt.Println("username: ", username)
	fmt.Printf("type of age: %T \n", age)
	fmt.Println("age: ", age)
	fmt.Printf("type of isStudent: %T \n", isStudent)
	fmt.Println("isStudent: ", isStudent)
	fmt.Printf("type of marks: %T \n", marks)
	fmt.Println("marks: ", marks)
	fmt.Printf("type of grade: %T \n", grade)
	fmt.Println("grade: ", grade)

	// default values and aliases
	fmt.Println("----------------------------")
	fmt.Println("Default values and aliases")
	fmt.Println("----------------------------")

	var randomInt int
	fmt.Println("randomInt: ", randomInt)

	var randomChar byte
	fmt.Println("randomChar: ", randomChar)

	var randomBool bool
	fmt.Println("randomBool: ", randomBool)

	var randomFloat float32
	fmt.Println("randomFloat: ", randomFloat)

	var randomString string
	fmt.Println("randomString: ", randomString)

	// Implicit type declaration
	fmt.Println("----------------------------")
	fmt.Println("Implicit type declaration")
	fmt.Println("----------------------------")

	var randomValue = 10
	fmt.Printf("type of randomValue: %T \n", randomValue)
	fmt.Println("randomValue: ", randomValue)

	// Short hand declaration

	fmt.Println("Short hand declaration")

	randomVariable := 20
	fmt.Printf("type of randomVariable: %T \n", randomVariable)
	fmt.Println("randomVariable: ", randomVariable)

	// Printing global
	fmt.Println("----------------------------")
	fmt.Println("Printing global")
	fmt.Println("----------------------------")

	fmt.Println(GlobalVariable)
	fmt.Println(globalVariable)

}
