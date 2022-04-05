import { Route, Routes } from "react-router-dom";
import Stocks from "./components/Stocks";
// import Header from "./components/Header";
import Search from "./components/Search";
// import LandingPage from "./components/LandingPage";

function Container () {
    return(
        <div>
        <Routes>
            {/* <Route path='/' element={<LandingPage/>}/> */}
            <Route path='/search' element={<Search/>}/>
            <Route path='/stocks' element={<Stocks/>}/>
        </Routes>
        </div>
    )
}

export default Container

//