function myNew (obj, ...rest) {
  let newObj = Object.create(obj.prototype);
  const result = obj.apply(newObj, rest);
  return typeof result === 'object' ? result : newObj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  return {
    fullName: `${this.firstName} ${this.lastName}`
  };
}

const tb = new Person('Chen', 'Tianbao');
console.log(tb);

const tb2 =myNew(Person, 'Chen', 'Tianbao');
console.log(tb2)
