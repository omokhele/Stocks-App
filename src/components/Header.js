const Header = ({symbol, companyName, latestPrice, ytdChange}) => {
  return(
      <ul>
      <li>{symbol}</li>
      <li>{companyName}</li>
      <li>{latestPrice}</li>
      <li>{ytdChange}</li>
      </ul>
  )
}
export default Header