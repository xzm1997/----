function _ajax(method, url) {
  let request = new XMLHttpRequest();
  request.open(method, url);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      // XMLHttpRequest.readyState 属性返回一个 XMLHttpRequest 代理当前所处的状态。
      // 	DONE	下载操作已完成
      if (request.status >= 200 && request.status < 300) {
        let string = request.responseText;
        let object = JSON.parse(string)
      }
    }
  }
  request.send();
}
