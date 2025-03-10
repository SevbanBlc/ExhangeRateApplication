import Header from "./Header.jsx"
import "./Css/Exchange.css"
import Currency from "./Currency.jsx";

function Exchange() {

  return(
    <div className="Container">
      <Header/>
      <div>
        <Currency/>
      </div>
    </div>
  )
}

export default Exchange
