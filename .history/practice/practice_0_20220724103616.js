function _ajax(method, url) {
  let request = new XMLHttpRequest();
  request.open(method, url);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let string = request.responseText;
        let object = JSON.parse(string)
      }
    }
  }
}
