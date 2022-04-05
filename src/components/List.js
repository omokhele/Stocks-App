// import { NavLink } from 'react-router-dom'


const List = ({symbol, companyName, primaryExchange, latestPrice, high, low, marketCap}) => {
  return(
    <nav>
      <ul>
      <li>{symbol}</li>
      <li>{companyName}</li>
      <li>{primaryExchange}</li>     
      <li>{latestPrice}</li>
      <li>{high}</li>
      <li>{low}</li>
      <li>{marketCap}</li>
      </ul>
    </nav>
  )
}
export default List