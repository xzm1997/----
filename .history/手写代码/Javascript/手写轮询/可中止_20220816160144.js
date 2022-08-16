class myInterval {
  constructor(callback, interval) {
    this.timer = null;
    this.isStop = false;
    this.callback = callback;
  }

  stop() {
    this.isStop = true;
    clearTimeout(this.timer);
  }

  async start() {
    this.isStop = false;
    await loop();
  }

  async loop() {
    try {
      await this.callback()
    } catch(e) {

    }
  }
}
