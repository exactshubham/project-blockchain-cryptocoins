const axios = require('axios')
const cryptoModel = require('../models/coinsModel')

const getCrypto = async function(req, res){
  
    try {
        
        const options = {
            method: "get",
            url: `https://api.coincap.io/v2/assets`,
            headers: {
                Authorization: "Bearer 04e1393b-4229-41ee-b0dd-cedfc71a2dc2" 
            }
        }
        const result = await axios(options)
        let { data } = result
let getData = data.data
getData = getData.sort((currency1, currency2) => {
            return (currency1.changePercent24Hr - currency2.changePercent24Hr)
        }).map((element) => { const { symbol, name, marketCapUsd, priceUsd } = element
        return { symbol, name, marketCapUsd, priceUsd }
         });
 await cryptoModel.deleteMany()
 let finalData2 = await cryptoModel.create(getData)
return res.status(201).send({status: true, data: finalData2}) }
catch (error) {
       return res.status(500).send({status: false, message: error.message })
    }
}

module.exports={getCrypto}








