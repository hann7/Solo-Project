import React from 'react';
import Display from './display-card'
import Recents from './recents'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: '',
      data: [], 
      recents: []
  }
    this.displayData = this.displayData.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  
  displayData () {
    const ticker = this.state.input;
    this.state.recents.push(ticker)
    fetch(`/api/search/${ticker}`)
      .then(res => res.json())
      .then(data => {
          this.setState({ data })
      })
      .catch(err => console.log('error displaying req data: ' + err));
  }

  updateInput(e){
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <Recents recents={this.state.recents}/>
        <h2>Search</h2>
          <input value={this.state.userInput} onChange={this.updateInput} id="search-bar" type="text" placeholder="Start typing..."></input>
          <button onClick={this.displayData} id="search-button" type="submit">Search</button>
        <Display data={this.state.data} />
      </div>
    )
  }
}

export default Search;

// Time Series (Daily): {
//   2022-05-04: {
//   "1. open": "282.5900",
//   "2. high": "290.8800",
//   "3. low": "276.7300",
//   "4. close": "289.9800",
//   "5. volume": "33463409"
//   }
// }
