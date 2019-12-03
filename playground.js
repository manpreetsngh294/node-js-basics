// let foo = () => {
//   this.year = 2019;
//   //let year = 2019;

//   console.log(this.year);
// };

// foo();

// car = {
//   //name: 'Jetta',
//   drive: function() {
//     console.log(this.name);
//   }
// };

// car.drive();

let name = 'J';
function drive() {
  console.log(this.name);
}

drive();
