import React from 'react';
import logo from './logo.svg';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
        <h1>App</h1>
      </div>
    )
  }
}
export default App;
