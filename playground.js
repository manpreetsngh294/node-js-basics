//  Call is legal even for: too many parameters, too few parameters
//  Cannot enforce the types of parameters

//  Usual boiler-plate in case type should be enforced
function namedFoo(param) {
  if (param) {
    if (typeof param === 'number') {
      console.log(param);
    } else {
      console.log('pass a number');
    }
  } else {
    console.log('no parameter passed');
  }
}

namedFoo();
