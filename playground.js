//  Truthiness
//  Zero, empty string, undefined, null, false << falsy entities
//  as such uninitialized variable is undefined. null is set explicitly.

let i = null;
if (i) {
  console.log('i is truthy');
}
