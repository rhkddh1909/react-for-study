import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import './css/index.css'; 

import App from './App';
import RootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

const enhancer = 
    process.env.NODE_ENV === "prodution" 
    ? compose(applyMiddleware()) 
    : composeWithDevTools(applyMiddleware(logger));

const store = createStore(RootReducer,enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
