import react from 'react';
import "./Css/Currency.css"
import { HiMiniArrowRightCircle } from "react-icons/hi2";
function Currency(props) {

  const [amount, setAmount] = React.useState(0);
  const [fromCurrency, setFromCurrency] = React.useState("");
  const [toCurrency, setToCurrency] = React.useState("");
  const [result,setResult] = React.useState(0);

  return(
    <div className="currency">
      <input value={amount}
             onChange={(e)=> setAmount(e.target.value)}
             type="number" className="amount"/>
      <select
        onChange={(e)=> setFromCurrency(e.target.value)}
         className="from-currency-option">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TL">Tl</option>
      </select>
      <HiMiniArrowRightCircle style={{fontSize: '30px'}} />
      <select
        onChange={(e)=> setToCurrency(e.target.value)}
         className="to-currency-option">
        <option value="TL">TL</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>

      <input
        onChange={(e)=> setResult( e.target.value)}
        value={result} type="number" className="result"/>
      <button className="button">Exchange</button>
    </div>
  )
}

export default Currency
