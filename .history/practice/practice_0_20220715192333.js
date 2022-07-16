class Person {
  constructor() {
    this.queue = [];
    setTimeout(() => {
      this.next()
    }, 0)
  }

  sleep(time) {

  }
  eat() {
    console.log('eat');
  }
}

let p = Person();
p.eat().sleep(1000).eat().sleep(2000).eat()
