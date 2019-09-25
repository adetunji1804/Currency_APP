var express = require('express');
var router = express.Router();
var exchangeRate = require('../services/exchange');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Adetunji Adewuyi' });
});

router.get('/convert', function(req, res, next){
  var query = req.query
//TODO figure out conversion, using API
let toCurrency =query.to_currency;
let dollars =query.dollars;

//TODO Send a response page with the converted data
exchangeRate(toCurrency).then(function( response ){
let data = response.data;
let exchangeRate = data.rates[toCurrency];
let convertedAmount = dollars/exchangeRate;

let shortConvertedAmount = convertedAmount.toFixed(3); //to 3 decimal place

//TODO replace this, but we have to return something
//res.send('This many dollars: ' + convertedAmount); 
res.render('results', {
    dollars: dollars,
    toCurrency: toCurrency,
    converted: shortConvertedAmount
    
    });

  });

});

/*GET About page */
router.get('/about', function(req, res, next){
  res.render('about', {about_text: 'My currency site!'});
});

module.exports = router;
