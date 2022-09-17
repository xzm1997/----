class Parent {

}

class Child extends Parent {

}

console.log(Child.__proto__ === Parent)
console.log(Object.getPrototypeOf(Child) === Parent)
console.log(Child.__proto__.__proto__ === Object)
