class Person {
  constructor() {
    return new Promise(function(resolve, reject) {

    })
  }

  sleep(time) {
    
  }
  eat() {
    console.log('eat');
  }
}

let p = Person();
p.eat().sleep(1000).eat().sleep(2000).eat()
