import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Spotify, Yelp, Whoops404 } from './pages';

import Countries  from './components/Countries';
import { Capitals } from './components/Capitals';
import { Neighbors } from './components/Neighbors';

export function App() {
  return <div>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/countries" element={<Countries />}>
              <Route  path="/capitals" element={<Capitals />} />
              <Route  path="/neighbors" element={<Neighbors />} />
              </Route>
          <Route  path="/spotify" element={<Spotify />} />
          <Route  path="/yelp" element={<Yelp />} />
          <Route  path="*" element={<Whoops404 />} />
      </Routes>
  </div>
}
export default App;