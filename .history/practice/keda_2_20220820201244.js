function signalVerify( signal ) {
  // write code here
  let key = signal.split('=')[0];
  let val = signal.split('=')[1];

  let keyReg = /[a-z]+/;
  let valReg = /[a-zA-z\s]+/;
  if(!keyReg.test(key)) {
    console.log(1);
    return false;
  }
  if (val[0] === ' ') {
    console.log(2);
    return false;
  }
  if (!valReg.test(val)) {
    console.log(3);
    return false;
  }

  return true;
}

console.log(signalVerify("v=0"))
