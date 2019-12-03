let car = {
  model: 'MG Hector',
  owner: {
    name: 'Sunil',
    city: 'Bengaluru'
  },
  drive: function() {
    console.log('drives');
  },
  wheels: ['RX19', 'RY19']
};

console.log(car.model);
console.log(car.owner.name.lastName.x);

car.drive();
