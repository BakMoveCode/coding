var getFn = function () {
  var arrs = [];
  for (var i = 0; i < 3; i++) {
    arrs.push(function () {
      return i;
    });
  }
  return arrs;
};
var fns = getFn();
console.log(fns[0]() + fns[1]());
