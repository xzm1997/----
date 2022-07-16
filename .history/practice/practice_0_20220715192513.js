class Person {
  constructor() {
    this.queue = [];
    setTimeout(() => {
      this.next()
    }, 0)
    return this;
  }
  next() {
    let fn = this.queue.shift()
    fn && fn();
  }
  sleep(time) {

  }
  eat() {
    let fn = () => {
      console.log(eat);
    }
  }
}

let p = Person();
p.eat().sleep(1000).eat().sleep(2000).eat()
