

import { useState, useEffect } from 'react';
import axios from 'axios';
import { CLIENT_URL }  from '../services/constants';
import List from './List'

function Stocks () {
    

    // // https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_92a7c44683df4731b5a113fd3561a40d

    const [stockDatas, setStockDatas] = useState([]);
    // const [symbol, setSymbol] = useState('')
    // const symbol = 'aapl'
    const key = '/quote?token=pk_92a7c44683df4731b5a113fd3561a40d'
    
    const syms = ['FB', 'aapl' , 'snap', 'NDAQ'];
    useEffect(() => {
        const fetchData = async (item) => { 
             
            try{
                const response = await axios.get(`${CLIENT_URL}${item}${key}`); 
                const result = response.data
                console.log(result)
                setStockDatas((prevState) => prevState.concat(result));
                // setSymbol(symbol);
            }catch(error) {
                console.log(error)
            }
        }
        const items = syms.map(fetchData); 
                console.log(items) 
        console.log("running...")
    },[])

    return (
       <div>

           
           {/* <h1> Stocks </h1> */}
           {

               
               (stockDatas || []).map((stockData, index) => {
                   const { symbol, companyName, primaryExchange, latestPrice, high, low, marketCap } = stockData;
                return (<List 
                    symbol= {symbol} 
                    companyName = {companyName} 
                    primaryExchange = {primaryExchange} 
                    latestPrice = {latestPrice} 
                    high = {high} 
                    low = {low} 
                    marketCap = {marketCap} 
                    key={index}
                    />);
               })

           }
       </div>
   
    )
}

export default Stocks