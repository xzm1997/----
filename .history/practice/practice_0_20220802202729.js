let testSet = new Set(['1']);
let testWeakSet = new WeakSet([1:'2']);

testSet.add(1);
testSet.add(1);

console.log(testWeakSet);
