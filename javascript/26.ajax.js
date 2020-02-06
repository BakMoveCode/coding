const ajax = function({ url = "", method = "get", params = {}, async = true }) {
  const xhr = new XMLHttpRequest();
  const method = method.toLocaleLowerCase() || "get";

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
      }
    };
  });
};
