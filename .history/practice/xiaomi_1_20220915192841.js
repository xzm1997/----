const obj = {
  name: 'obj',
  handler:function(name2) {
    return this.name && name2;
  }
}

console.log(obj.handler.bind({name:'band'}, true))
