const myInstanceof = function(target, source) {
  let proto = target.__proto__;
  if (proto) {
    if (proto === source.prototype) {
      return true;
    } else {
      myInstanceof(proto.source);
    }
  } else {
    return false;
  }
};
