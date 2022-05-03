import React from 'react';
import * as ReactDOM from 'react-dom/client';

import styles from 'styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Here, look at a kitten while I try to code this thing</h1>
        <img src="http://placekitten.com/900/600" alt="kitty"/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);