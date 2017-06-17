
if (true) {
  var g = 1;
  let x = 2;
}


if (typeof g === 'undefined' ) throw new Error();
if (typeof x !== 'undefined' ) throw new Error();

console.log("ok");
