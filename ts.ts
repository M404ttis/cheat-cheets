// in case of coding interview emergency situation, have a look into this. 
// maybe install ts-node to have it run locally


// type anotations
let interger: number = 42; 
let float: number = 12.99; 
let userName: string = 'nice little string here'; 
let rocksTs: boolean = true; 
let whateverThisIsInTheEnd: any = 4;
function logMessage(message: string):void {console.log(message);} 
let u: undefined = undefined;
let n: null = null;


// arrays 
let numbers: number[] = [1, 2, 3, 4]; 
let names: Array<string> = ["mattis", "Bob", "Charly"];

// tuples
let tuple: [string, number];
tuple = ["hiho", 161];

//Enums - define a set of named constants (numeric or string based)
// numeric enums 
enum Barcode { Ean, Xasin, asin }
let numericBarcode: Barcode = Barcode.Ean

// string enums 
enum Barcode2 { Ean = "Ean", Xasin = "Xasin", Asin = "Asin" }
let stringBarcode: Barcode2 = Barcode2.Asin


// Interfaces (define structure of an object, specifying the types of its properties)
interface Person {
    firstName: string;
    lastName: string;
    age: number;
};

let me: Person = {firstName: "Mattis", lastName: "TypyScripty", age: 28 };

// Type aliases (create a new name for a type)
type StringOrBoolean = string | boolean; 
let sample: StringOrBoolean = true;
let sample1: StringOrBoolean = "true";

//Functions
// Function Types and Signatures
function add(a:number, b:number): number{return a + b };
let multiply: (x: number, y:number) => number; 
multiply = (x,y) => x*y; 

// Optional and Default Parameters
function greet(name: string, greeting: string = "Moin"): string {return `${greeting}, ${name}`};
console.log(greet("Mattis")); 

