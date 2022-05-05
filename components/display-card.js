import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const dataArr = [];
    const dataPointsList = this.props.data['Time Series (Daily)'];

    console.log(dataPointsList)
    for (const i in dataPointsList) {
      dataArr.push(
        <div className='display' key={i}>
          <span>Date: {i}</span><br></br>
          <span>Open: {dataPointsList[i]["1. open"]}</span><br></br>
          <span>High: {dataPointsList[i]["2. high"]}</span><br></br>
          <span>Low: {dataPointsList[i]["3. low"]}</span><br></br>
          <span>Close: {dataPointsList[i]["4. close"]}</span><br></br>
          <span>Volume: {dataPointsList[i]["5. volume"]}</span><br></br>
        </div>
      )
    }
    return (
      <div>
        <h4>Info will go here!</h4>
        {dataArr}
      </div>
    )
  }
}

export default Display;

// "Meta Data": {
//   "1. Information": "Daily Prices (open, high, low, close) and Volumes",
//   "2. Symbol": "MSFT",
//   "3. Last Refreshed": "2022-05-04",
//   "4. Output Size": "Compact",
//   "5. Time Zone": "US/Eastern"
//   },
// Time Series (Daily): {
//   2022-05-04: {
//   "1. open": "282.5900",
//   "2. high": "290.8800",
//   "3. low": "276.7300",
//   "4. close": "289.9800",
//   "5. volume": "33463409"
//   }
// }