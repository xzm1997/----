class EventCenter{
  constructor() {
    this.tasks = {};
  }

  addEventListener(type, handler) {
    if (!this.task[type]) {
      this.task[type] = [];
    }
    this.task[type].push(handler);
  }

  removeEventListener(type, ...rest) {
    if (!this.task[type]) {
      throw new Error('No type found');
    }
    this.task[type].forEach(function (callback) {
      callback();
    })
  }

  triggerEvent(type) {

  }
}
