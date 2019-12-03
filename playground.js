function outerFunction() {
  let counter = 0;

  return function() {
    counter++;
    console.log(counter);
  };
}

let refToInnerFunction = outerFunction();

refToInnerFunction();
refToInnerFunction();
refToInnerFunction();
refToInnerFunction();

let refToInnerFunction2 = outerFunction();

refToInnerFunction2();
refToInnerFunction2();
refToInnerFunction2();
refToInnerFunction2();
