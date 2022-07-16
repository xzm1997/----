class Person {
  constructor() {
    this.queue = [];
  }
  step = function() {
    let fn = this.queue.shift();
    fn && fn();
  }
  sleep = function(wait) {
    setTimeout(() => {
      this.queue.push(this);
      step();
    }, wait);
  }
  eat = function() {

  }
}

const p = new Person();
p.eat().sleep(1000).eat().sleep(2000).eat()
