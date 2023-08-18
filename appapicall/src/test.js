const axios = require('axios');

// const binance_url = 'https://api2.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","BNBUSDT","ADAUSDT","XRPUSDT","AVAXUSDT","UNIUSDT","THETAUSDT"]'

const url = 'https://api.publicapis.org/entries'

const restapi_get = () => {
    axios.get(url).then((response)=>{
        console.log(response.data)
    })    
}

restapi_get()