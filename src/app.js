import { add, square } from './utils';
import { isAdult, canDrink } from './person';

console.log("app.js is running");

console.log(square(4));
console.log(add(2, 2));

console.log(-1, isAdult(-1));
console.log(95, isAdult(95));

console.log(21, canDrink(21));
console.log(35, canDrink(35));
console.log(10, canDrink(10));
