import {useEffect, useState} from 'react';
import FruitFilter from './FruitFilter';
import FruitList from './FruitList';


function FruitContainer (props) {

    //initialise the fruitlist to the full list passed in props
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)

    // to update state, we will need a function that updates when the flter value changes
    // The function wull store the filter 'state' and will filter the list of fruits to display

const handleFilterChange = (event) => {
    event.preventDefault();

    const filterValue = event.target.value;
    // prevState = previous state / past state
    // prev state can be used without being directly written in the function block

    setFruitsToDisplay((_prevState) => {
        //remove the fruits that don't contain the filter value
    const filteredFruitList =  props.fruits.filter((fruit) => {
            //include values that match the user input (event.target.value)
            return fruit.toLowerCase().includes(filterValue.toLowerCase());

        })
       return filteredFruitList 
    })
}

    useEffect(() => {
console.log('do something', fruitsToDisplay)
    }, [fruitsToDisplay])

    // Once an event is initiated, A SIDEEFFECT is created.

    return (
        <div>
            <FruitFilter onChange={(e) => handleFilterChange(e)}/>
            <FruitList fruits={fruitsToDisplay}/>
            

        </div>
    )
}

// All of the data is hoisted to the top of the tree in the container
// and it is passed to the child components


export default FruitContainer