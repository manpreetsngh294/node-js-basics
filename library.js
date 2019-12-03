let variable = 1.235;

const PI = 3.1415;

car = {
  name: 'Suzuki'
};

function foo() {
  console.log('foo is called');
}

//  CommonJS export system
module.exports = {
  variable,
  PI,
  bar: foo
};
