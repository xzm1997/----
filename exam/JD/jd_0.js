let obj = {
  num:5,
  func: function() {
    let that=this;
    that.num *= 2;
    (function() {
      this.num *= 3;
      that.num *= 4;
      return function() {
        this.num *= 5;
        that.num *= 6;
      }
    })()
  }
}

var num = 2;
obj.func();
console.log(num)
console.log(obj.num)
