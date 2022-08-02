const _apply = function(context, args) {
  if (typeof this !== 'function') throw 'TypeError';
  context = context ? context : window;
  context.fn = this;
  let res = context.fn(args);
  delete context.fn;
  return res;
}

const _call = function() {

}

const _bind = function() {

}


const fnTest = function(content) {
  console.log(content);
}

fnTest.apply(null, 'Test apply');
