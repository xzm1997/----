Function.prototype.myApply = function(context) {
  if (typeof this !== "function") {
    throw 'TypeError';
  }

  let args = arguments[1] || null;
  let context = context || window;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") throw 'TypeError';
  let context = context || window;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

Function.prototype.myBind = function(context) {
  
}
