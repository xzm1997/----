const obj = {
  name: 'achang',
  age: 25,
  skills: {
    js: '深拷贝'
  }
}
const str = JSON.stringify(obj)
let obj2 = JSON.parse(str)

obj2.skills.js = '修改深拷贝'
console.log(obj2) // { age: 25, name: "achang", skills: { js: "修改深拷贝" }}
console.log(obj)// { age: 25, name: "achang", skills: { js: "深拷贝" }}
