import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
interface AppProps { }
interface AppState {
  name: string;
}

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'React'
  //   };
  // }


    return (
      <Router>
        <Routes>
<Route path='*' element={<Hello name={'JJJ'} /> } />
</Routes>
      </Router>
    );

}

render(<App />, document.getElementById('root'));
