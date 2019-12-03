//  CommonJS import system
const { constants, variable, bar, car } = require('./library');

console.log(constants.E);

bar();

car.drive();

let anotherDrive = car.drive;

anotherDrive();
