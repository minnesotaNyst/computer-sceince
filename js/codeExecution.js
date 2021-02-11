const num = 3;
function addTwo(int) {
	const sum = int + 2;
	return sum;
}

const output = addTwo(num);

// When the preceding code block begins to run, main() is initially pushed onto the call stack. But what is main()? We can think of the main() function as a global function that creates the global memory that will run the code in the JavaScript runtime. main() indicates that access to the global memory is active

// When the TOE points to the first expression, const num = 3;, a new variable, num, is assigned the value of 3 in the global memory, also known as the global variable environment

// In the next line of code, we reach the function declaration for addTwo. Just like a variable, the function identifier, addTwo, is added to the global memory along with its function definition as shown in the following image (note that this function was not executed, so the statements in the function definition are not evaluated at this time)

// The TOE will then point to the last line of our code block

// Once again, a variable is declared, which allocates global memory to the variable output. Because the right side of this expression (addTwo(num);) is a function call, JavaScript will invoke addTwo(num) and assign the return value to output. addTwo(num) is known as the function caller. Once invoked, the function will then be pushed onto the call stack

// Because the addTwo(num) was invoked with the argument num, a lookup is performed in the global execution context. This variable is found to have a value of 3

// The parameter in the addTwo function declaration, int, is then assigned the value 3 from the argument, num, in the local execution context of the addTwo function

// The thread of execution, or TOE, then evaluates the next expression in the function, const sum = int + 2;. The variable declaration and assignment allocates memory and evaluates the addition operation, int + 2. A lookup for the variable, int, is found in the execution context to have a value of 3, so the addition is performed to result in the sum of 5. This value is then assigned to sum

// The TOE now reaches the last line of the function, return sum. The return keyword is important because it indicates the end of the function, and pops the addTwo function off the call stack. sum is then looked up in the execution context and evaluated to have the value of 5. This value is then returned back to the function caller, which occurred in main()

// The TOE now returns to the main(), the only function left on the call stack. The right side of the following expression has now been resolved to a value of 5, due to the return sum statement in the preceding step. This enables the assignment in the expression, const output = addTwo(num);, to update the output variable in the global memory
