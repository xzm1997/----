function signalVerify( signal ) {
  // write code here
  let key = signal.split('=')[0];
  let val = signal.split('=')[1];

  let keyReg = /^[a-z]$/;
  let valReg = /[a-zA-z0-9\s]+/;
  if(!keyReg.test(key)) return false;
  if (val[0] === ' ') return false;
  if (!valReg.test(val)) return false;

  return true;
}

console.log(signalVerify("vs=00 "))
