import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import AddUserInputContainer from '../../containers/AddUserInputContainer';
import UserItemsContainer from '../../containers/UserItemsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to='/' className='nav'>Home</NavLink>
          <NavLink to='/bankTracker' className='nav'>Bank Tracker</NavLink>
          <h1 className="App-title">OSRS Wealth tracker</h1>
        </header>
        <Route exact path='/' component={AddUserInputContainer} />
        <Route exact path='/bankTracker' component={UserItemsContainer} />
      </div>
    );
  }
}

export default App;
