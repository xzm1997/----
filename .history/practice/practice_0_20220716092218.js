class Person {
  constructor() {
    this.queue = [];
    setTimeout(() => {
      this.step();
    })
  }
  step = function() {
    let fn = this.queue.shift();
    fn && fn();
  }
  sleep = function(wait) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log('sleep');
        this.step();
      }, wait);
    })
  }
  eat = function() {
    console.log('eat');
    this.queue.push
  }
}

const p = new Person();
p.eat().sleep(1000).eat().sleep(2000).eat()
