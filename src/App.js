import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [conis, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=20")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>Coins{loading ? "" : `(${conis.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {conis.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
