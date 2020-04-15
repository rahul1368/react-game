import React, { Component } from 'react';
import { render } from 'react-dom';
import Sudoku from './components/entry';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Sudoku />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
