function supperFunction () {
  this.flag = 'Supper'
}

function subFunction () {
  this.value = 'Sub'
}

let supperInstance = new supperFunction();
subFunction.prototype = supperInstance;
let subInstance = new subFunction();

console.log(supperInstance.flag);
