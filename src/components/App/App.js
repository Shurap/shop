import React from 'react';
import NavigationBar from '../NavigationBar';
import Router from '../Router';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <h1>App</h1>
      {/* <button className="btn btn-primary">Test</button> */}
      <Router/>
    </div>
  );
}

export default App;
