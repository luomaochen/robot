var requestOptions = {
   method: 'POST',
   redirect: 'follow'
};

fetch("http://jldl.mkemall.cn/index/homeGoodsList", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
