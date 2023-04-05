// Data types
let sales: number = 12_321_434;
let course = 'TypeScript'
let is_published: boolean = true;
let level; // any type

function render(document: any) {
    console.log(document);
}

// Arrays
let myArray = [];
let myNumArray: number[] = [];
let numbers: number[] = [1, 2, 3];

numbers.forEach(n => n.toString());


// Tuples 
let u: [number, string] = [1, 'Bekarys'];
// u.push(1) ---> TypeScript gap

// Enums
const enum Size { Small = 0, Medium = 1, Large }; // more optimized
enum Weight { Light = 'l', Medium = 'm', Bold = 'b' };

let mySize: Size = Size.Medium;
let myWeight: Weight = Weight.Medium;
console.log(mySize, myWeight);

