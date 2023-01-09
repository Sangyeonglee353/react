import { useEffect, useState } from 'react';

function CoinTracker() {
  const [loading, setloading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setloading(false);
    });
  }, []);
  const onSelect = (event) => setValue(event.target.value);
  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={value} onChange={onSelect}>
          {coins.map((coin, index) => (
            <option value={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
        <hr />
        <input
            value={amount}
            onChange={onChangeAmount}
            placehorder="Write here..."
            type="number"
         >
        </input> USD
      <div>
      {loading ? "": `${amount / coins[value].quotes.USD.price} ${coins[value].symbol}`}
      </div>
    </div>
  );
}

export default CoinTracker;
