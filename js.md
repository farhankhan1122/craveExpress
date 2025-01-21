<!------------------------------------ arrays ----------------------------------->
The pop() method pops/removes the last element of an array, and returns it. This method changes the length of the array.
The slice() method returns specific elements from an array, as a new array object
The slice() method does not modify the existing array


<!------------------------------------ operators ----------------------->
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.


<!------------------------------------ functions ------------------------>
<!-- closure -->
-allow nested functions
-In this way, data sharing between different functions is facilitated and changes in one function are reflected in other functions.
-Closure refers to the situation where the inner function can access the scope of the outer function and the variables defined in it can be used in this scope.
-In simple terms a closure can "remember" values from its outer function's scope and use them later, even if the outer function has returned and those values would normally be out of scope.
[[[-When to use closure concept ?]]]
From definition you can see that it's used for retrival of values from outer parent function so we can understand that closure can be used for retrival of dead values which have become out of scope. also we can comprehend that it can used for privating some varibles or function.
Thus closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.



While writing the code whenever there is a need for these types of thing try to incorporate this closure concept i.e. In a programmer languge it's called lexical environment

<!-- lexical scoping -->
-determining the scope of a function.
When closures are used, variables and functions defined within a function remain within the scope of that function and cannot be used elsewhere. This is one of the fundamental principles of lexical scoping
