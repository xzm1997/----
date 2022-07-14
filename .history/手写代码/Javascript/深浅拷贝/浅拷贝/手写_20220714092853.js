function shallowCopy(target) {
  if (typeof target === 'object' && target !== null) {
    const copy = Array.isArray(target) ? [] : {};
    for (const prop in target) {
      if (target.hasOwnProperty(prop)) {
        copy[prop] = target[prop];
      }
    }
    return copy;
  }
  return target;
}
