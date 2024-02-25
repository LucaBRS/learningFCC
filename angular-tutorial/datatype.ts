let lname: string;
lname = 'luca';

let newname = lname.toUpperCase()

console.log(newname)

//number
let age: number;
age = 20;

let dob = "24";


/*
 let isValid:boolean;
 //it should have the default value to false
 //BUT! js does not know about datatype!!!
 // this is due to the "strict" in the tsconfig.json!

 console.log(isValid)
*/

let empList: string[]; //array of string!|
empList = ["luca", "lsad", "asdasd"];

let numList: Array<number>;//this is another way to define an array!
numList = [1, 2, 3, 4, 5]

//filter value grater then 2

let result = numList.filter((num: number) => num > 2);

let num = numList.find((num) => num === 2);
console.log(result)
console.log(num)

//ENUM

const enum Color { //declaring cost do help out to trim the code in js
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

// TOUPLE

let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(12, 30)


