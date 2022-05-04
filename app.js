import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Search from './components/search-bar.js'
import styles from 'styles.css';

class App extends React.Component {
  componentDidMount() {
    //fetch request to get info from api to populate home page??
    //not sure if i should fetch from server then use server to fetch from api?
  }

  render() {
    return (
      <div>
        <h1>Here, look at a kitten while I try to code this thing</h1>
        <img src="http://placekitten.com/900/600" alt="kitty"/>
        <Search />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);