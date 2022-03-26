function Header({changePercent, companyName, latestPrice, symbol}) {
    return(
    <div>
      <h1>Stocks</h1>
      <div>changePercent:{changePercent}</div>
      <div>companyName: {companyName}</div>
      <div>lastestPrice:{latestPrice}</div>
      <div>symbol:{symbol}</div>
    </div>
    )
}

export default Header