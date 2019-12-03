car = {
  name: 'Kia',
  drive: () => {
    console.log(`${this.name} is driving`);
  }
};

//  calling the function on an object
car.drive();

//  let's take the function outside
let anotherDrive = car.drive;

anotherDrive();
