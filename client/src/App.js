import React from 'react';
import Saved from './pages/Saved'
import Search from './pages/Search'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </>
  );
}

export default App;
