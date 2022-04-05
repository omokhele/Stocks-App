import { NavLink } from 'react-router-dom';


function LandingPage () {
    return(
    <div>
    <ul>
        <NavLink to="/">
        <li>Stocks</li>
        </NavLink>
        <NavLink to="/stocks">
        <li>Stock Info</li>
        </NavLink>
        <NavLink to="/search">
        <li>Search</li>
        </NavLink>
    </ul>
    </div>
    )
}

export default LandingPage