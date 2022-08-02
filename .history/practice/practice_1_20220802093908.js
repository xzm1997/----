Function.prototype._apply = function(context, args) {
  if (typeof this !== 'function') throw 'TypeError';
  context = context ? context : window;
  context.fn = this;
  let res = context.fn(args);
  delete context.fn;
  return res;
}

Function.prototype._call = function(context, ...args) {
  if (typeof this !== 'function') throw 'TypeError';
  context = context || window;
  context.fn = this;
  let res = context.fn(args);
  delete context.fn;
  return res;
}

Function.prototype._bind = function(context) {
  if (typeof this !== 'function') throw 'TypeError';
  context = context || window;
}


const fnTest = function(content) {
  console.log(content);
}

// fnTest._apply(this, 'Test apply');
// fnTest.call(this, 'Test apply');
