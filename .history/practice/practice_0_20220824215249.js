function fn(tree, name){
  //To Do
  if (tree.hasOwnProperty('name')) {
    if (tree.name === name) {
      console.log(tree.code)
      return tree.code;
    } else if (tree.hasOwnProperty('children')) {
      let res;
      tree.children.forEach(node => {
        res = fn(node, name);
        if (res) {
          return res;
        }
      })
    }
  }
}

var tree = {
name : '中国',
children : [
{
  name : '北京',
  children : [
    {
    name : '朝阳群众'
    },
    {
    name : '海淀区'
    },
    {
    name : '昌平区'
    }
  ]
},
{
  name : '浙江省',
  children : [
    {
    name : '杭州市',
    code : '0571',
    },
    {
    name : '嘉兴市'
    },
    {
    name : '绍兴市'
    },
    {
    name : '宁波市'
    }
  ]
}
]
};

var node = fn(tree, '杭州市');
console.log(node);    // { name: '杭州市', code: 0571 }
