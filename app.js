import React from 'react';
import Search from './components/search-bar.js'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Recents from './components/recents.js'

function App() {
  return (
    <div>
      <h1>Here, look at a kitten while I code this thing</h1>
      <img src="https://placekitten.com/200/138"/>
      <hr className="linebreak" />

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>

      <hr className="linebreak" />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to my super fun and cool app!<br></br>You can search any stonks and find the latest price data<br></br>Please view kitties while you wait for demo!</p>
      <img src ="https://placekitten.com/500/400"/>
      <img src ="https://placekitten.com/600/400"/>
      <img src ="https://placekitten.com/600/500"/>
      <img src ="https://placekitten.com/400/500"/>
      <img src ="https://placekitten.com/500/600"/>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;