package main

import (
	"fmt"
	"net/http"
)

var taskItems = []string{"Learn Golang", "Learn React", "Learn NodeJS", "Learn Python"}

func main() {
	fmt.Println("#### Welcome to out ToDoList App ####")

	http.HandleFunc("/", helloUser)

	http.HandleFunc("/showTask", showTask)

	// http.HandleFunc("/addTask", addTask)

	http.ListenAndServe(":3000", nil)
}

func helloUser(writer http.ResponseWriter, request *http.Request) {
	var greeting = "Hello user, Response from server"
	fmt.Fprintln(writer, greeting)

}

func showTask(writer http.ResponseWriter, request *http.Request) {
	for _, task := range taskItems {
		fmt.Fprintln(writer, task)
	}
}

func printTask(taskItems []string) {
	fmt.Println("List of my ToDos")
	for index, task := range taskItems {
		fmt.Printf("%d: %s\n", index+1, task)
	}
	fmt.Println()
}

func addTask(taskItem []string, newTask string) []string {
	return append(taskItem, newTask)
}
