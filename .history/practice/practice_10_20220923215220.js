// 声明位置
var test = function(){
  console.log(this.x)
} 

var x = "2";

var obj = {
  x:"1",
  fn:test,
}

// 调用位置
obj.fn(); // 1

test(); // 2
