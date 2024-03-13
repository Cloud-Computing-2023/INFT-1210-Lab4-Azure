import React, { useState, useEffect } from 'react';
// import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const jsonData = await response.json();
    console.log(jsonData.message);
    setData(jsonData.message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Backend Response:</h1>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
