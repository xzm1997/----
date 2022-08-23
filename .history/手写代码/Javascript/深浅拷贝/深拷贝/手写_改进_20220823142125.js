function isType(obj,type){//判断包装类型的原型
  return Object.prototype.toString.call(obj).indexOf(type)!=-1
}
const deepClone =(initObj) =>
{
  if (typeof initObj !== 'object') {//如果是基本类型直接返回值
    return initObj
  }
  if(isType(initObj,'String')||isType(initObj,'Number')||isType(initObj,'Boolean'))
    return initObj.valueOf();
  if(isType(initObj,'Date'))
    return new Date(initObj.valueOf());
  if(isType(initObj,'RegExp')){
    let pattern = initObj.valueOf();
    let flags = '';
    flags += pattern.global ? 'g' : '';
    flags += pattern.ignoreCase ? 'i' : '';
    flags += pattern.multiline ? 'm' : '';
    return new RegExp(pattern, flags);
  }
  const obj = Array.isArray(initObj)?[]:{};//可能是对象或者数组
  for (const key in initObj) {
    if (typeof initObj[key] === 'object') {//对于对象元素，deepclone
      //递归返回新的对象
      obj[key] = deepClone(initObj[key]);
    } else if (typeof initObj[key] === 'function') {//对于函数,用bind拷贝
      //返回新函数
      obj[key] = initObj[key].bind(obj);
    } else {
      //基本类型直接返回
      obj[key] = initObj[key];
    }
  }
  return obj;
}
