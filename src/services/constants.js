import axios from 'axios';

// const symbol = ['aapl', 'fb', 'snap']
const key = '/quote?token=pk_92a7c44683df4731b5a113fd3561a40d'
export const CLIENT_URL = `https://cloud.iexapis.com/stable/stock/`


    
        export async function searchData () { 
        let symbol = 'FB';
        // let file = symbols.map((symbol, index) => {
        // return symbol 
    // }); 
        // console.log('file is', file)
              
            try{
                const response = await axios.get(`${CLIENT_URL}${symbol}${key}`);
                console.log('checking', response.data) 
                const result = response.data;
                return result;
            }catch(error) {
                console.log(error)
            }
    }
