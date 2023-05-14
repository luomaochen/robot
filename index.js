const request = require('request')
 
request.post('http://jldl.mkemall.cn/index/homeGoodsList', {}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
