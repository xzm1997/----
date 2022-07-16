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
    let fn = () => {
      setTimeout(() => {
        console.log('sleep ' + time + 'seconds');
      }, time*1000)
      this.next();
    }
    this.queue.push(fn);
    return this;
  }
  eat() {
    let fn = () => {
      console.log('eat');
    }
    this.queue.push(fn);
    return this;
  }
}

let p = new Person();
p.sleep(1000).eat().sleep(2000).eat()
