function foo() {
	setTimeout(() => {
		console.log('bar');
	}, 0);

	console.log('foo');
	console.log('baz');
}

foo();

// When the code block runs, main() pushes onto the call stack and creates the global execution context.

// JavaScript allocates foo in global memory.

// The TOE then evaluates the function call, foo(), in the last line of this code block. This function gets pushed onto the call stack. Referencing the function definition in the global memory, foo() is then executed.

// As the thread of execution moves into the body of the function, setTimeout, is activated. Notice that the timer is set to zero (in the line }, 0);). This means the callback function in the setTimeout is immediately resolved and then pushed into the callback queue.

// Although the anonymous callback function is ready to execute, the event loop must first check the call stack to see if there are any more tasks to run.

// Notice that there are two console.log statements that will run before the event loop allows the callback function in setTimeout to push onto the call stack.

// The TOE now evaluates each of the console.log statements, which causes them to push onto the call stack, log the respective strings into the console, "foo" and "baz", then pop off the call stack.

// Once the call stack has finished evaluating all the code that is available and becomes idle, the event loop allows the callback function to push onto the call stack, then log the third string, "bar", into the console.
