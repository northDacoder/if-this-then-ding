var express = require('express');
var router = express.Router();
var request = require('request');

var key = 'MOaAChuu4FnnDUPCwQYWBq6w3SynoRGj';
var productsAPI = 'http://stage-api.target.com/products/v3/50565775';
/* GET home page. */
router.get('/api/find/cartwheel/products/', function(req, res, next) {
  //res.json({"Start":"here"});
  var keyword = req.query.keyword;
    if(keyword){//a keyword was set.
        var url = "https://tws-secure.target.com/searchservice/item/search_results/v2/by_keyword"
        makeRequest(url+'?search_term='+keyword,function(body){
            var payloadJson = eval('('+body+')');
            res.json(payloadJson);
        });
       // https://api.target.com/v2/products/search?searchTerm=patio&key=[APIKey]
    }
  makeRequest(productsAPI+'?id_type=tcin&key='+key,function(body){
    var payloadJson = eval('('+body+')');
    res.json(payloadJson);
  });
});


function makeRequest(url,callback){
  request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          callback && callback(body) || console.log(body); // Print the google web page.
       }
  //?id_type=dpci&store_id=530&mode=online&fields=ids&key=
  })
}
module.exports = router;
