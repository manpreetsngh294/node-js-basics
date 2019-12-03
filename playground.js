car = {
  name: 'Kia',
  drive: function() {
    console.log(`${this.name} is driving`);
  }
};

anotherCar = {
  name: 'MG Hector'
};

//  calling the function on an object
car.drive();

//  let's take the function outside
let anotherDrive = car.drive;

anotherDrive();

//  another object
anotherCar.drive = car.drive;
anotherCar.drive();
