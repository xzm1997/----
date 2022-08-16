class myInterval {
  constructor(callback, interval) {
    this.timer = null;
    this.isStop = false;
  }

  stop() {

  }

  async start() {
    this.isStop = false;
    await loop();
  }

  async loop() {

  }
}
