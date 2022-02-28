import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
interface AppProps {}
interface AppState {
  name: string;
}

const About = () => <div>About page</div>
const Contact = () => <div>Contact page</div>
const TextInput = () => {
  const {name} = useParams()
  return(
<div>TextInput- {name}</div>);
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
        <Route path="/" element={<Hello name={'JJJ'} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/library/:name" element={<TextInput />} />
      </Routes>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/library/input-text">Text Input</Link>
          </li>
          <li>
          <Link to="/library/button">Button</Link>
          </li>
          </ul>
        </nav>
    </Router>
  );
};

render(<App />, document.getElementById('root'));
