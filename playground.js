//  Only numbers. Double-precision floating point units.

let i = 100.1222;

console.log(typeof i);

//  Divide by zero is not an exception, but a special value
console.log(i / 0);

//  a variable can change its type in the course of the program
i = 'title';
console.log(typeof i);

i = false;
console.log(typeof i);

i = {
  name: 'Vijay',
  city: 'Mangaluru'
};

console.log(typeof i);

i = function() {
  //...
};
console.log(typeof i);
