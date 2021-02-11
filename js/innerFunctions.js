function answer() {
	console.log('Hello world');
	function response() {
		console.log('Are you listening?');
		return;
	}

	console.log('I like bananas');
	response();
}

console.log('Good Morning');
answer();

// When we begin executing the code block, the call stack begins as before with main(). The TOE evaluates the function declaration, answer, and allocates answer in the global memory with the function definition, written in shorthand as <| f |>. Note that the function answer was not invoked but instead was stored with a reference to the function definition in the global context. Therefore, the console.log statements located in its body are not evaluated at this time.

// The TOE then proceeds to the next line of executable code, console.log("Good Morning"), skipping over the function body of answer because it was not invoked. The statement, console.log("Good Morning");, however, is invoked and gets pushed onto the call stack. This executes this statement and logs the first string into the console, "Good Morning"

// After the console.log statement, in the next line, the TOE evaluates the function call, answer(). This creates a lookup to the global scope, which locates answer and then pushes this function onto the call stack

// The thread of execution then enters the answer function definition. the TOE will evaluate the first line in the function, console.log("Hello World");. This statement gets pushed onto the call stack, which then logs the second string, "Hello world"

// The TOE then proceeds to the next line in the function, answer, and allocates the function response in the execution context

// The next statement to evaluate will be the console.log("I like bananas");, which gets pushed onto the call stack, logs the third string into the console, "I like bananas", and then pops off the call stack to return to the function answer

// In the next line, the function call, response(), first causes a lookup to the execution context of the function answer. response() then gets pushed onto the call stack

// The TOE enters the function definition of response which then evaluates the first line in this function, console.log("Are you listening?"). Since this function is invoked, it gets pushed onto the call stack, which logs the fourth string into the console, "Are you listening?", then gets popped off the call stack, at which point the TOE returns to the response function

// The next line in the response function is the return statement. This pops the response() function off the call stack and returns the TOE back to the answer()

// Finally as the TOE returns to the function caller, answer(), this reaches the end of the entire code block which results in main() popping off the call stack with no more code to execute.
