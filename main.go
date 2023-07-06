package main

import (
	"fmt"
	"reflect"
	"unsafe"
)

func stringAddr(s string) uintptr {
	return (*reflect.StringHeader)(unsafe.Pointer(&s)).Data
}

func main() {
	name := "Hello"
	t := name[0:3]

	fmt.Printf("Add ress of name: %08x\n", stringAddr(name))
	fmt.Printf("Add ress of t: %08x\n", stringAddr(t))
	fmt.Println(stringAddr(name) == stringAddr(t)) // Gues the output of this line

	name += "hello world 😀"

	fmt.Printf("Add ress of name: %08x\n", stringAddr(name))
	fmt.Printf("Add ress of t: %08x\n", stringAddr(t))
	fmt.Println(stringAddr(name) == stringAddr(t)) // Gues the output of this line
}
