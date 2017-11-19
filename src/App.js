import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login className='login' onLoginSubmit={(data) => {
            console.log(data);
        }}/>
      </div>
    );
  }
}

export default App;
