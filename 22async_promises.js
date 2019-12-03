function f3(params) {
  console.log('Inside f3');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise settlement from f3');
      resolve(params);
    }, 2000);
  });
}

function f2(params) {
  console.log('Inside f2');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise settlement from f2');
      resolve(params);
    }, 2000);
  });
}

function f1(params) {
  console.log('Inside f1');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise settlement from f1');
      resolve(params);
    }, 2000);
  });
}

// Attempting with Promises

// f1('Great')
//   .then(r => f2(r))
//   .then(r => f3(r))
//   .then(r => console.log(r))
//   .catch(e => console.log('Error', e));

let getData = async () => {
  try {
    let resultF1 = await f1('F1 Result');
    let resultF2 = await f2('F2 Result');
    let resultF3 = await f3('F3 Result');

    console.log(`${resultF1}, ${resultF2}, ${resultF3}`);
  } catch (error) {
    console.log('ERROR at async function', error);
  }
};

getData();
