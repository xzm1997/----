const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  //构造方法 
  constructor(executor) {
    this.PromiseState = PENDING;
    this.PromiseResult = null;

    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    //resolve 函数
    const resolve = (value) => {
      //判断状态
      if (this.PromiseState !== 'pending') return;
      // 如果 value 是一个promise，那我们的库中应该也要实现一个递归解析
      if (value instanceof Promise) {
        return value.then(resolve, reject);
      }
      //1. 修改对象的状态 (promiseState) 
      this.PromiseState = FULFILLED;
      //2. 设置对象结果值 (promiseResult)
      this.PromiseResult = value;
      //调用成功的回调函数（如果执行器中是异步任务，需要在改变对象状态之后执行then方法中的回调函数，也就是异步任务回调的执行在resolve中）
      //settimeout是为了模仿then是异步任务 
      //这里看不懂参考野生面经代码输出结果中异步事件循环中的第三题
      setTimeout(() => {
        this.resolveCallbacks.forEach(callback => {
          callback(value);
        })
      })
    }
    //reject 函数
    const reject = (value) => {
      if (this.PromiseState !== 'pending') return;
      this.PromiseState = REJECTED;
      this.PromiseResult = value;
      //执行失败的回调
      setTimeout(() => {     
        this.rejectCallbacks.forEach(callback => {
          callback(value);
        })
      })
    }

    try {
      //同步调用『执行器函数』
      executor(resolve, reject)
    } catch (e) {
      //同步任务中如果throw了error修改 promise 对象状态为『失败』
      reject(e);
    }
  }
  //then 方法封装
  then (onFulfilled, onRejected) {
    //值传递，没有第一个回调，给你加了个回调
    onFulfilled = 
      typeof onFulfilled === "function"
        ? onFulfilled
        : function(value) {
          return value
        }
    //判断回调函数参数
    //异常穿透，如果then中没传第二个回调，则这里相当于给加了个默认的回调函数，所以不会报错
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function(reason) {
          throw reason;
        }
    //then方法返回的结果是一个新的promise对象，其结果状态由then指定的回调函数执行的结果决定
    return new Promise((resolve, reject) => {
      //封装函数
      let callback = (type) => {
        //try catch保证 在回调中抛出异常也能改变对象状态为reject
        try {
          //获取回调函数的执行结果
          let result = type(this.PromiseResult);
          //判断
          if (result instanceof Promise) {
            //如果是 Promise 类型的对象
            result.then(value => {
              resolve(value);
            }, reason => {
              reject(reason);
            })
          } else {
            //结果的对象状态为『成功』
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      }
      if (this.PromiseState === FULFILLED) {
        setTimeout(() => {
          callback(onFulfilled);
        });
      }
      if (this.PromiseState === REJECTED) {
        setTimeout(() => {
          callback(onRejected);
        });
      }
      //判断 pending 状态，此处是为了如果执行器中任务是settimeout等异步任务，则promise对象状态未改变，还是pending，所以需要判断Pending状态
      if (this.PromiseState === PENDING) {
        //保存回调函数（这一步是为了让resolve内部能够调到then中的回调函数）
        //用数组是为了有多个回调的情况
        this.resolveCallbacks.push(function () {
          callback(onFulfilled)
        });
        this.rejectCallbacks.push(function () {
          callback(onRejected)
        });
      }   
    })
  }
  //catch 方法
  catch (onRejected) {
    return this.then(undefined, onRejected);
  }
  //finally方法
  finally (onSettled) {
    return this.then(data=>{ // then返回的也是一个Promise对象
      onSettled(); // 执行回调,但不传递数据
      return data; // 保证返回的Promise对象的数据一致
    }, reason=>{
      onSettled();
       throw reason; // 保证返回的Promise对象的数据状态一致
      })
  }
  //添加 resolve 方法
  static resolve(value) {
    //返回promise对象
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(v => {
          resolve(v);
        }, r => {
          reject(r);
        })
      } else {
        //状态设置为成功
        resolve(value);
      }
    });
  }

  //添加 reject 方法
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  //添加 all 方法
  static all(promises) {
    //返回结果为promise对象
    return new Promise((resolve, reject) => {
      //声明变量
      let count = 0;
      let arr = [];
      //遍历
      for (let i = 0; i < promises.length; i++) {
        //
        promises[i].then(v => {
          //能走到这得知对象的状态是成功
          //每个promise对象 都成功才能执行resolve
          count++;
          //将当前promise对象成功的结果 存入到数组中（用Push可能顺序不一致了）
          arr[i] = v;
          //判断
          if (count === promises.length) {
            //修改状态
            resolve(arr);
          }
        }, r => {
          reject(r);
        });
      }
    });
  }

  //添加 race 方法
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(v => {
          //修改返回对象的状态为 『成功』
          resolve(v);
        }, r => {
          //修改返回对象的状态为 『失败』
          reject(r);
        })
      }
    });
  }
}

let p1 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  // // resolve("OK");
  // reject("Erosssr");
  // })
  //console.log('111');
  resolve('resolve1');
  console.log('111');
});

let res = p1.then(value => {
  console.log(222);
}, reason => {
  console.warn(reason);
});
console.log('333');
