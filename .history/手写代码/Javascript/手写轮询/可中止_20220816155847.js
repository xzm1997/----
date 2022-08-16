class myInterval {
  constructor(callback, interval) {
    this.timer = null;
    this.isStop = false;
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

  }
}
