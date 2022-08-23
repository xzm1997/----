class EventVenter {
  constructor() {
    this.handlers = {};
  }

  addEventListener(type, handler) {
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }
    this.handlers[type].push(handler);
  }

  dispatchEvent(type, params) {
    if (!this.handlers[type]) {
      throw 'TypeError';
    }
    this.handlers[type].forEach(handler => {
      handler(...params);
    })
  }

  removeEventListener(type, handler) {

  }
}
