class N{
  constructor(value) {
      this.value = value || 0;
  }
  add(count) {
      this.value += count;
      return this;
  }
  minus(count) {
      this.value -= count;
      return this;
  }
  get() {
      console.log(this.value);
      return this.value;
  }
}

const n = new N(2);
n.add(198).minus(100).get(); // 100
