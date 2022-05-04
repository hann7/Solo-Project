import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <form action="/api/search" method="get">
          <input id="search-bar" type="text" placeholder="Start typing..."></input>
          <button id="search-button" type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;