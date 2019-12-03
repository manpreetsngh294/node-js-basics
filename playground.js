console.log('Module this', this);

(function() {
  console.log('Function this', this);
})();

(() => {
  console.log('Lambda this', this);
})();

console.log('Global object', global);
