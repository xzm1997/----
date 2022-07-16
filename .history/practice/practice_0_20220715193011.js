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

作者：_Queen
链接：https://juejin.cn/post/6844903992711987208
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
