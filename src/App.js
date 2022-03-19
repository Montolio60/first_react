import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ProfilCart } from './componets/ProfiCart';
import { TestP } from './componets/TestP';

const name = ["denys", "Bohdan"];


var options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timezone: 'UTC'
};

function App() {
  let [count, setCount] = React.useState(0);
  let [date, setTime] = React.useState(new Date().toLocaleString() + "");

  console.log(date);
  React.useEffect(() => {

    const i = setInterval(() => setCount(count + 1), 1000);
    return () => { clearInterval(i) }
  }, [count])

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <div>{String(date)}</div>
      </header>
    </div>
  );
}

export default App;
