function a() {
  var temp = 1;
  function b() {
    console.log(temp);
  }
  b();
}

function b() {
  console.log(temp);
}

a();
