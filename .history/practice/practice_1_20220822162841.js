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
    if (!this.handlers[type]) {
      throw 'TypeError';
    }
    const index = this.handlers[type].findIndex(el => el === handler);
    if (index === -1) {
      return 'TypeError';
    }
    this.handlers[type].splice(index, 1);
    if (this.handlers[type].length === 0) {
      delete this.handlers[type]
    }
  }
}
