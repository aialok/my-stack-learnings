package hello

import "testing"

func TestSay(t *testing.T) {
	want := "Hello, World!"
	if got := Say("World!"); got != want {
		t.Errorf("Say() = %q, want %q", got, want)
	}
}
