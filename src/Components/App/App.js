import React from 'react';
import './App.css';
import Header from '../Header/Header';
import LinkConverter from '../LinkConverter/LinkConverter';

const App = () => (
  <div className="App">
    <Header />
    <LinkConverter appTitle="GitHub Link Converter" />
  </div>
);

export default App;
