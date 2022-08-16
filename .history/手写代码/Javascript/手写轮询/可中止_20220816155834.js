class myInterval {
  constructor(callback, interval) {
    this.timer = null;
    this.isStop = false;
  }

  stop() {
    this.isStop = true;
  }

  async start() {
    this.isStop = false;
    await loop();
  }

  async loop() {

  }
}
