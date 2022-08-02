const _apply = function(context, ...args) {
  if (typeof this !== 'function') throw 'TypeError';
  context = context ? context : window;
}

const _call = function() {

}

const _bind = function() {

}


const fnTest = function(content) {
  console.log(content);
}

fnTest.apply(null, 'Test apply');
