import React from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import LinkConverter from '../LinkConverter/LinkConverter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LinkConverter appTitle="GitHub Link Converter" />
      </div>
    );
  }
}

export default App;
