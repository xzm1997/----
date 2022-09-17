const obj = {
  name: 'obj',
  handler:function(name2) {
    return this.name && name2;
  }
}
let res = obj.handler.bind({name:'band'}, true)
console.log(res)
