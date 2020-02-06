const myInstanceof = function(target, source) {
  let proto = target.__proto__;
  if (proto) {
    if (proto === source.prototype) {
      return true;
    } else {
      myInstanceof(proto, source);
    }
  } else {
    return false;
  }
};

function myInstanceof(target, source) {
  let proto = target.__proto__;
  if (proto) {
    if (proto === source.prototype) {
      return true;
    } else {
      instanceofFun(proto, source);
    }
  } else {
    return false;
  }
}

console.log(myInstanceof([], Array));
