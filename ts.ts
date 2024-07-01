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


