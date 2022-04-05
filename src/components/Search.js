import { searchData } from "../services/constants";
import { useState, useEffect } from 'react';
import List from "./List";

export default function Search ({symbol, companyName, primaryExchange, latestPrice, high, low, marketCap}) {
    // const systems = ['FB', 'aapl' , 'snap', 'NDAQ'];
    // const file = systems.map(searchData); 
    // console.log("file", file) 

    console.log("running...")
    const [input, setInput] = useState('');
    const [searchResult, setSearchResult] = useState("");

    const handleChange = (e) => {
        // event.preventDefault()
        setInput(e.target.value)
    }

    const handleClick = async () => {
        let answer = await searchData(input);
        console.log("loading", answer)
        setSearchResult(answer)
    }

    useEffect(() => {
    }, [])


    return(
        <div>
            <input type="text" placeholder="Search Here" onChange={((e) => handleChange(e))}/>
            <input type="button" value="Click" onClick={() => handleClick()}/>
            <ul>
                <li>{searchResult.symbol}</li>
                <li>{searchResult.companyName}</li>
                <li>{searchResult.primaryExchange}</li>
                <li>{searchResult.latestPrice}</li>
                <li>{searchResult.high}</li>
                <li>{searchResult.low}</li>
                <li>{searchResult.marketCap}</li>
            </ul>
            
            
        </div>
    )
}