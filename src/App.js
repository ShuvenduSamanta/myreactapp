import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import { Cards, Chart, CountryPicker } from './components'
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shuvendu Samanta React with harry
        </a>
      </header>
    </div>
  );
}  */
class App extends React.Component{
  render(){
    return(
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
        <h1>App</h1>
      </div>
    )
  }
}
export default App;
