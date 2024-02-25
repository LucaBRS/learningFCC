class Employee {
    #id: number; //native syntax to create private variable
    private name: string;
    protected address: string;

    get empId(){
        return this.#id;
    }
    set empId(id:number){
        this.#id=id;
    }

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.address = address;
        this.name = name;
    }

    static getEmployeeCount(): number {
        return 60;
    }

    getNameWithAddress(): string {
        //return this._name + " " + this.address; // not a good way of concat
        return `${this.name} stays at ${this.address}`;
    }
}

// // old way with no constructor
// let joh = new Employee();
//
// joh.id = 1
// joh.name = "joh";
// joh.address = "asd"
// console.log(joh)

// with constructor
let john = new Employee(1, "john", "123")
let nameAndAdd = john.getNameWithAddress();
console.log(john);
console.log(nameAndAdd);

john.empId=100;

console.log(john.empId)

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
}

let mike = new Manager(2, "mike", "456");

console.log(mike.getNameWithAddress());