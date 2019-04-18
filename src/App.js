import React, { Component } from 'react';
import FrontPage from './containers/frontpage/frontpage';
import './App.css';

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  render() {
    return (
      <div className="App">
        <FrontPage />
      </div>
    );
  }
}

export default App;
