let variable = 1.235;

const PI = 3.1415;
const E = 2.71828;

car = {
  name: 'Suzuki',
  drive: function() {
    console.log(`${this.name} is driving`);
  }
};

function foo() {
  console.log('foo is called');
}

//  CommonJS export system
module.exports = {
  variable,
  car,
  constants: {
    PI,
    E
  },
  bar: foo
};
