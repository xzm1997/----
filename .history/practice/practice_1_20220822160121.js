function person(age) {
  this.age = age     
}

person.prototype.name = 'name1'
var person1 = new person()

console.log(person1.name) // 1

// // person.prototype = {name: 'name3'}
// person.prototype.name = 'name3'

// console.log(person1.name) // 2
// ​
// person1.name = 'name2'

// console.log(person1.name) // 3
