var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   redirect: 'follow'
};

fetch("http://jldl.mkemall.cn/index/homeGoodsList", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
