import react from 'react';
import "./Css/Currency.css"
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import {useState} from "react";
import axios from "axios";

let baseUrl = "https://api.freecurrencyapi.com/v1/latest"
let apiKey = "fca_live_e4iv7jfPpaXopnJMtFjg8M8mJ5KxHMqVl4fiVEfT"

function Currency(props) {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result,setResult] = useState(0);

  const exchange = async ()=>
  {
  const response =
    await axios.get(`${baseUrl}?apikey=${apiKey}&base_currency=${fromCurrency}`);
    const result = (response.data.data[toCurrency] * amount).toFixed(2)f
    setResult(result)


  }

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
        <option value="TL">TRY</option>
      </select>
      <HiMiniArrowRightCircle style={{fontSize: '30px'}} />
      <select
        onChange={(e)=> setToCurrency(e.target.value)}
         className="to-currency-option">
        <option value="TL">TRY</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>

      <input
        onChange={(e)=> setResult( e.target.value)}
        value={result} type="number" className="result"/>
      <button
        onClick={exchange}
        className="button">Exchange</button>
    </div>
  )
}

export default Currency
