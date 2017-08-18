import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Demo1 from './components/state/index.js'
// import Event from './components/event/index.js'
// import If from './components/if/index.js'
// import List from './components/list/index.js'
// import Form from './components/form/index.js'
// import StateUp from './components/state_up/index.js'
import StateUp2 from './components/state_up/index2.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Demo1 />
        <Event />
        <If isLoggedIn={false} />
        <List />
        <Form />
        <StateUp /> */}
        <StateUp2 />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
