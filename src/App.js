import './App.css';
import fruitList from './components/Data'
import FruitContainer from './components/FruitContainer'

// component that lists the fruit. This will need array of fruits to display
// input to capture filter value from user.This will need one piect of data, the current value of the filter

//State will hold the filtered list of fruits
// Value of the filter

function App() {
  return (
    <div className="App">
      <FruitContainer fruits={fruitList}/>
    </div>
  );
}

export default App;
