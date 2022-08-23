class EventVenter {
  constructor() {
    this.handlers = {};
  }

  addEventListener(type, handler) {
    if (!this.handlers[handler]) {
      this.handlers[handler] = [];
    }
    this.handlers[type].push(handler);
  }

  dispatchEvent(type, params) {

  }

  removeEventListener(type, handler) {

  }
}
