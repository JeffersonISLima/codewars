/*
https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/go

Convert a Number to a String!
We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// My solution
package convert_number_to_string

import "fmt"

func NumberToString(n int) string {
	return fmt.Sprint(n)
}

// Clever solution
/*
package convert_number_to_string
import "strconv"
var NumberToString = strconv.Itoa
*/
