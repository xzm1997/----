class Person {
  constructor() {
    this.queue = [];
    this.index = 0;
    this.firstSleepWatch = false;
    this.init();
  }

  init() {
    setTimeout(() => this.run() , 0);
  }
  run() {
    
  }
}

let = new Person();
p.eat().sleep(1000).eat().sleep(2000).eat()
