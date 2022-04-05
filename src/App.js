import './App.css'; 
// import Stocks from './components/Stocks'
// import { NavLink, Routes, Route } from 'react-router-dom'
import Container from './Container';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
       
      <LandingPage/>
      <Container/>

    </div>
  );
}

export default App;

