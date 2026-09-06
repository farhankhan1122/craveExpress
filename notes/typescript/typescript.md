# Typescript Basics
1. what and why?
2. environment setup
3. variable declaration
4. variable types
5. functions
6. interface
7. class
8. access modifiers

1. 
a- typescript is an open source programming language developed and maintained by Microsoft it is a typed superset of JavaScript that compiled to plain JavaScript which is understood by the browser's
- In simple terms combine the JavaScript we know with es6 es7 and a few additional features and end product is typescript

b-Now why would you want to use typescript as opposed to other languages like dart or CoffeeScript or even plain old JavaScript 
- the first one is its relation to JavaScript typescript is superior to its counterparts like CoffeeScript and dart in a way that typescript is just extended JavaScript 
- dart and CoffeeScript are new languages in themselves while typescript is not you can even rename a .Js extension file to .TS and it would work perfectly fine 
- the second reason is optional static typing and type inference 
- javascript is dynamically typed which means javascript does not know what type a variable is until it is actually instantiated at runtime which is too late typescript on the other hand add type support to JavaScript as a result I've identified as and when you type your code and during the compilation step this results in less error-prone code
- specifying the type is completely optional when you don't specify a type typescript will infer the type for you and still point out the errors which would otherwise be seen only during runtime 
- another important reason to consider typescript is the enhanced IDE support with typescript we get intelligent support ability to refactor code easily and the red squiggly line whenever there is an error along with the description of that ever this helps you spend more time on coding and less time debugging


## summary
- open source programming language from microsoft
- typed superset of javascript
- compiles down to plain javascript

- relation to js
- optional static typing and type inference 
- IDE support
- Rapid growth and use


2. Installing Typescript
- npm install -g typescript (globally)
- tsc -v      [to know version of typescipt]


- you can also run code using node 
- node main.ts or node main 
- create main.ts file and declare variable 
let message = 'Hello World'
console.log(message)
- once you run main.ts file using tsc main.ts it created main.js file 
var message = 'Hello World'
console.log(message)
- after this you see the error in main.ts let message => cannot redeclare block scope variable message
- this happens because the file is treated as a script rather than a module a module has its own scope whereas scripts share the global scope
- to get rid of this error we need to add an export statement at the top which exports nothing by adding an import or export statement typescript treats this file as a module instead of a script
- so at the top at the statement export
export {}
let message = 'Hello world'
console.log(message)
- after compiling main.js changes
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello World';
console.log(message);

- to automatically recompile that typescript file whenever there is a change we can do that using the watch option of the typescript compiler so in the terminal run the command [tsc main --watch] you can see that the compiler


3. Variable Declaration
- unlike traditional JavaScript typescript encourages the use of let and Const keyword for variable declarations 
- if you have played around with JavaScript for a while you probably know how scope and var declarations can trick you
   javascript has only global scope and function scope there is no block level scope
- this is something that often misleads programmers used to other languages to make things worse it is also not an error to re-declare same variable multiple times 
- let and const declarations solve these problems 
- both let and Const support block level scoping and you can't re declare variable multiple times with let or Const 
-  let declarations can be done without initialization whereas Const declarations are always inisialized with a value and const declarations once
assigned can never be reassigned


4. Variable Types
- essence of typescript
### basic types [Boolean,Number,string]
- let isBeginner = true
- how assign type
- assign a type to this variable the syntax is right after the variable name
- append a colon followed by the data type so : and then boolean so we now have a variable is beginner of type boolean which is initialized with a value of true
let isBeginner: Boolean = true;
let total: number;
let name: string = 'farhan'
- in typescript you can also use template strings and template strings can span multiple lines and have embedded expressions 

- but what really is the use of having types 
- there are two important ones 
  * the first one is [static-type] checking
  * second is [Intellisence] when i type name.  intellisense providing the properties and methods applicable to a string type 
  and when I type total. you can see the suggestions are only related to a numeric type

### other types [null,undefined]
- let n: null = null;
- let u: undefined = undefined;
- null and undefined are classified as [subtypes] of all other types that means to say you can assign a value of null or undefined to either boolean number or a string typed variable so we can have let is new of type boolean is equal to null and also let my name of type string is equal
to undefined that works perfectly fine as well

### Array type
- building on these basic types and the subtypes we can declare an array of values using the array type 
- there are two syntaxes for declaring an array type
1. let list1: number[] = [1,2,3]
2. let list2: Array<number> = [1,2,3]
- you can pick any one of above two you like
- sometimes you might have an array that contains values of mixed type for that purpose typescript provides the tuple type for example we can create a tuple that contains a string and a number so I can have 
- let person1: [string,number] = ['farhan', 25];
- the thing with a tuple though is that the number of elements in the array are fixed so the person one tuple indicates that the array contains exactly one string value and one numeric value and the order of the values has to match the order of the types so I cannot simply add another numeric value so 
- - let person1: [string,number] = ['farhan', 25,33]; throws error time I cannot swap the values and expect it to work as well I cannot have 
- - let person1: [string,number] = [ 25, 'farhan']; throws error [can not swap]

### Enum Type
- enum type which is a way of giving more friendly names to a set of numeric values for declaring an enum we use the enum keyword and that is followed by a name for the enum which is in turn followed by the values in a pair of curly braces
- enum Color {Red, Green, Blue}
- now we can declare variables for type enum and assign a values
- let c: Color = Color.Green;
- consoling c giving you 1
- {0, 1, 2}
- enum Color {Red = 5, Green, Blue}
- after consoling it gives 6
- a lot of the times you may store a value as a number in the database we might have a color field and the person who created the table might know zero is for red one for green and two for blue but

### any type
- dont forces to check any type

- let myVariable: any = 10
- console.log(myVariable.name)
- myVariable()
- myVariable.toUpperCase()


- typescript does not throw an error in any of the statements
- to tackle this situation typescript introduce a new type called unknown
- very to similar to any type

### unknown type
- any value is assignable to type unknown however you can't access any properties off of an unknown type nor can you call or construct them
- you get errors when you change any to unknow to above
- how to get rid of this 
- we need to use type assertion to convince the type system that we know better so we have to change my variable as string

- let myVariable: unknown = 10
- console.log(myVariable.name)
- myVariable()
- (myVariable as string).toUpperCase()

- for function 
function hasName(obj: any): obj is { name: string } {
    return !!obj === "object" &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name)
}

- exp: I'm going to have the function the function I'm going to call it has name it is going to have a parameter object of type any and it is going to return an object which contains the name property as a string and within the function we are going to have return object and type of object is equal to object and name property exists in the object so we are basically making a check to see if the name property exists


## Type Inference
- pecifying types is completely optional
- let a:
a = 10;
a = true

let b = 20;
b = true [typeError]
type true is not assignable to type number
- but we did not specify type to variable b what happened here is that typescript inferred that type of variable B if I hover on B you can see that it says it is of type number and when I type B dot you can see the intellisense providing methods that are only applicable to in number type so type inference again provides static type checking and intellisense support you might think if typescript infers the type for us why specify it at all in the first place well type inference takes place when initializing variables and not all the time as we see in the right now type inference does not work on variable a where there is no initialization types are also necessary


### ability to specify [union] of types for the same variable
- for example
  let multiType: number | boolean;  pipe character
  multiType = 20
  multiType = true
  - use to specifying multiple types when type value is not in our control it could comes from library or api response or from user inputs
  - why would you not use any type if value is not in your control
  - well there are two reasons
  1. the union type restricts to the specified type where the any type has no restrictions
  2. intellisence support


5. Functions