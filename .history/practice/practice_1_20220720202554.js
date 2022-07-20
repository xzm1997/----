function a() {
  var temp = 1;
  b();
}

function b() {
  console.log(temp);
}

a();
