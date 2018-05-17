import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App/App'
import { loadState, saveState } from './Data/localStorage'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'

const persistedState = loadState()

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, persistedState, devTools)

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store = { store } >
    <Router >
      <App />
    </ Router>
  </ Provider>, 
  document.getElementById('root')
);
