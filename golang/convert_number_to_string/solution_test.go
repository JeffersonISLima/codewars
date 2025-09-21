package convert_number_to_string

import "testing"

func TestNumberToString(t *testing.T) {
	tests := []struct {
		input    int
		expected string
	}{
		{123, "123"},
		{-45, "-45"},
		{0, "0"},
	}

	for _, testCase := range tests {
		result := NumberToString(testCase.input)
		if result != testCase.expected {
			t.Errorf("NumberToString(%d) = %s; esperado %s", testCase.input, result, testCase.expected)
		}
	}
}
