function Person(age) {
  this.age = age     
}

Person.prototype.name = 'name1'
var person1 = new Person()

console.log(person1.name) // 1

// Person.prototype = {name: 'name3'}
Person.prototype.name = 'name3'

console.log(person1.name) // 2
​
person1.name = 'name2'

console.log(person1.name) // 3
