// import {useState, useEffect} from 'react';
// import axios from 'axios';
// import {CLIENT_URL} from '../services/constants';

// import Header from './Header';

// function Stocks() {

// const [stocks, setStocks] = useState([]);
// const TOKEN = '/quote?token=pk_92a7c44683df4731b5a113fd3561a40d';


// useEffect(() => {
//     const symbols = "fb";
//     const fetchData = async () => {
//      try {
//         const response = await axios.get(`${CLIENT_URL}${symbols}${TOKEN}`);
//         const {changePercent, companyName, latestPrice, symbol} = response.data;
//         const { results } = response.data;
//         console.log(symbol);
//         setStocks({changePercent, companyName, latestPrice, symbol})
//         console.log(response);
//      }   catch (error) {
//          console.log(error);
//      }
//     };

//     fetchData();

// }, [])



//     return (
//        <div>
//            {
//                 (stocks || []).map((stock, index) => {                    
//                     const { changePercent, companyName, latestPrice, symbol } = stock;
//                     return <Header 
//                     changePercent = {changePercent} 
//                     companyName = {companyName}
//                     latestPrice = {latestPrice}
//                     symbol = {symbol}
//                     key={index}
//                     />
//                 })
//             }
//        </div>
//     )
// }

// export default Stocks;

import { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_URL } from "../services/constants";
import Header from "./Header";
function Stocks() {
  const [stocks, setStocks] = useState([]);

//   const TOKEN = "/quote?token=pk_194d66f4bdde414eabebad40c2819297";
  const TOKEN = "/quote?token=pk_92a7c44683df4731b5a113fd3561a40d";
  useEffect(() => {
    const symbols = "fb";
    const fetchData = async () => {
      try {
        const response = await axios.get(`${CLIENT_URL}${symbols}${TOKEN}`);
        const { changePercent, companyName, latestPrice, symbol } =
          response.data;
        console.log(response);
        setStocks({ changePercent, companyName, latestPrice, symbol });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
        {
        (stocks || []).map((stock, index) => {
          const { symbol, companyName, latestPrice, changePercent } = stock;
          return (
            <Header
              changePercent={changePercent}
              companyName={companyName}
              latestPrice={latestPrice}
              symbol={symbol}
              key={index}
            />
          );
        })}
      </div>
  );
}
export default Stocks;