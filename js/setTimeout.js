function sayHello() {
	setTimeout(() => console.log('Hello world'), 1000);
	function sayGoodbye() {
		console.log('See ya');
	}

	console.log('Good Morning');
	sayGoodbye();
}

sayHello();

// As this code runs, main() is pushed onto the call stack, creating access to the global execution context.

// The TOE evaluates the first line, and the function sayHello is stored in global memory.

// Since the function is not invoked, the TOE skips over the sayHello function body and goes to the last line of the code block, to the function call, sayHello();. This function call invokes the sayHello function, which pushes the sayHello() function onto the call stack, which then executes this function and creates a new execution context.

// The TOE then moves into the sayHello function definition and evaluates the first statement, the setTimeout function

// This Web API, setTimeout(), has a callback function that is configured to log "Hello world" after a delay of one second, or 1,000 milliseconds. Instead of pushing onto the call stack, setTimeout() can be thought of as being activated

// Once the setTimeout function has become activated, the timer begins. After the timer counts down one second, the timer resolves, which then pushes the callback function onto the callback queue

// NOTE: that setTimeout and all Web APIs resolve outside the JavaScript runtime. This means that because the call stack is NOT executing the setTimeout(), it's free to continue running other tasks or rendering the webpage and interacting with the user. This allows the UI to remain fluid and responsive

// While setTimeout is counting down its timer, the TOE actually continues to progress through the code block because the call stack is "waiting" to execute its next function. The TOE moves to the next line of code in the sayHello function body, which is the function declaration, sayGoodbye. The function identifier then allocates memory in the execution context

// The TOE will then move to the next line following the function body of sayGoodbye, which is the console.log("Good Morning"); statement. This is pushed onto the call stack, which then logs "Good Morning," then pops off the call stack.

// The TOE then moves on to the next line, the function call for sayGoodbye(). This function is invoked, which pushes this function onto the call stack and creates a new execution context.

// The TOE then moves on to the sayGoodbye function. This evaluates the statement, console.log("See ya");. Again, this statement gets executed as before to ultimately log the second string into the console, "See ya"

// Now that the end of the sayGoodbye function has been reached, although there wasn't a return statement, an implicit return undefined; will be returned to the function caller. This also pops the sayGoodbye() function off the call stack and returns the thread of execution back to the sayHello function

// Once the thread of execution returns to the outer function, sayHello, this function also ends because there are no more lines in the function body to execute. sayHello then pops off the call stack, due to the implicit return. The call stack is now in "waiting" mode, because the TOE returns to the original main function with no more lines of code to run

// Once setTimeout() resolves, the timer counts one second and the anonymous callback function gets pushed into the callback queue. Because the callback queue is currently empty, the anonymous callback function from setTimeout moves to the front of the queue, where it encounters the event loop.

// The purpose of the event loop is actually quite simple. The event loop observes the call stack to see if there are any tasks to process. If the call stack is "waiting," meaning not actively processing functions, then the event loop removes the callback function from the callback queue and pushes the callback function onto the call stack to finally execute.

// The thread of execution will then execute the anonymous callback function and place it on the call stack.

// Then the TOE will evaluate the body of the anonymous function, which will execute the statement, console.log("Hello world")

// Once the callback function has been executed, this function implicitly returns undefined, then pops off the call stack. Since there is no more code to execute or tasks to complete, this code block has run to its completion.
