const disorder = function(arr) {
  return arr.sort(() => {
    return Math.random() - 0.5;
  });
};
