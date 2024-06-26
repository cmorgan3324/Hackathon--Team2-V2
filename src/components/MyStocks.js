import React, { useState, useEffect } from 'react';

const MyStocks = ({ userId }) => {
  const [userStocks, setUserStocks] = useState([]);
  const [error, setError] = useState(null);

  const fetchUserStocks = async () => {
    try {
      const response = await fetch(`http://localhost:5000/assets/${userId}/stocks`);
      if (response.ok) {
        const data = await response.json();
        const stocks = data.data;
        setUserStocks(stocks);
        console.log(userStocks)

      } else {
        throw new Error('Failed to fetch user stocks');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteStock = async (userId, stockId) => {
    try {
      const fixedId = `00${stockId}`;
      const url = `http://localhost:5000/users/${userId}/portfolio`;
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'remove',
          type: 'stock',
          id: fixedId
        })
      };

      const controller = new AbortController();
      const signal = controller.signal;
  
      const response = await fetch(url, { ...options, signal });
      if (response.ok) {
        setUserStocks(userStocks.filter(stock => stock.Id !== stockId));
      } else {
        throw new Error('Failed to delete stock');
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    
  };
  
  useEffect(() => {
    if (userId) {
      fetchUserStocks();
    }
  }, [userId]);

  return (
    <div className="myStocks">
      <div className="myStocks-content">
        <h1 className="myStocks-title">My Stocks</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="myStocks-cards">
          {userStocks.map((stock) => (
            <div key={stock.Id} className="stock-card">
              <h2>{stock.Category}</h2>
              <p>Close: {stock.Close}</p>
              <p>Date: {stock.Date}</p>
              <p>High: {stock.High}</p>
              <p>Low: {stock.Low}</p>
              <p>Open: {stock.Open}</p>
              <p>Volume: {stock.Volume}</p>
              <button onClick={() => deleteStock(userId, stock.Id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default MyStocks;
