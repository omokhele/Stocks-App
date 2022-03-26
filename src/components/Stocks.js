

import { useState, useEffect } from 'react';
import axios from 'axios';
import { CLIENT_URL}  from '../services/constants';
import Header from './Header'

function Stocks () {
    let syms = ['FB', 'aapl' , 'snap', 'NDAQ'];
    // https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_92a7c44683df4731b5a113fd3561a40d
    const [stockDatas, setStockDatas] = useState([]);
    const [symbol, setSymbol] = useState(syms)
    
    const key = '/quote?token=pk_92a7c44683df4731b5a113fd3561a40d'
    useEffect(() => {
        const fetchData = async () => {       
            try{
                const response = await axios.get(`${CLIENT_URL}${symbol}${key}`);
                console.log(response.data) 
                const result = []
                result.push(response.data);
                setStockDatas(result);
                setSymbol(symbol);
            }catch(error) {
                console.log(error)
            }
        }
        fetchData();
        console.log("running...")
    },[])

    syms.map((sym) => {
        return sym
    })

    return (
       <div>

           
           <h1> Stocks </h1>
           {

               
               (stockDatas || []).map((stockData, index) => {
                   const { symbol, companyName, latestPrice, ytdChange } = stockData;
                return (<Header 
                    symbol = {symbol} 
                    companyName = {companyName} 
                    latestPrice = {latestPrice} 
                    ytdChange = {ytdChange} 
                    key={index}
                    />);
               })

           }
       </div>
   
    )
}

export default Stocks