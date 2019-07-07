// Your code goes here
let a = prompt('enter 1st digit');
let b = prompt('enter 2st digit');
let c = prompt('enter 3st digit');

if(a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle doesn’t exist');
} else if (a === b && b === c && c === a) {
console.log('Eequivalent triangle');
} else if (a === b || b === c || c === a) {
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}
