var axios = require('axios');

var config = {
   method: 'post',
   url: 'http://jldl.mkemall.cn/index/homeGoodsList',
   headers: { 
      'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)'
   }
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});
