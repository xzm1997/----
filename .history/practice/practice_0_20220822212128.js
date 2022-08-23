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

  removeEventListener(type, handler) {

  }

  triggerEvent(type) {

  }
}
