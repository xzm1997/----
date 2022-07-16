class Person {
  constructor() {
    this.queue = [];
    setTimeout(() => {
      this.step();
    }, 0)
  }
  step = function() {
    let fn = this.queue.shift();
    fn && fn();
  }
  sleep = function(wait) {
    this.queue.push(() => {
      console.log('sleep');
      setTimeout(() => {
        this.step();
      }, wait);
    })
    return this;
  }
  eat = function() {
    this.queue.push(() => {
      console.log('eat');
      this.step();
    })
    return this;
  }
}

const p = new Person();
p.eat().sleep(1000).eat().sleep(2000).eat()
