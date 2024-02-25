// name function
function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(12, 33));


// another way to create a function
//Arrow expression
const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(56, 4));

// third way to create function
//function expression
const mult = function (num1: number, num2: number): number {
    return num1 * num2;
};

console.log(mult(56, 4));


//*********************************************
// OPTIONAL/required PARAMETERS
//**********************************************
// i want to add 3 number but 3 is optional

//OPTIONAL
function addOptiona(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;//if else one line
}

console.log(addOptiona(12, 33));
console.log(addOptiona(12, 33, 4));

//REQUIRED
const subRequired = (num1: number, num2: number, num3: number = 12): number => num1 - num2;

console.log(subRequired(56, 4));
console.log(subRequired(56, 4, 99));//if i pass the 3 parameters it will substitute the default value


function addNNumbers(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
    // reduce is used to sum everything
}

let passNum: number[] = [4, 5, 2, 3] //PAY ATTENTION TO HOW TO PASS!!
console.log(addNNumbers(12, 33, ...passNum));
console.log(addNNumbers(12, 33, 4, 6, 7, 234, 54, 66, 7, 34534));


//**********
//GENERICS
//**********
function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4, 5, 6]);
let concatChar = getItems(["a","d","f"])