let axios = require('axios')

// Example request: https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR

const url = 'https://api.exchangeratesapi.io/latest'

module.exports = function(toCurrency, amount) {

    query = { 
        base: 'USD',
        symbols: toCurrency
    }

    return axios.get(url, {params: query})

}