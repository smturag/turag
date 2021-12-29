import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux'
import {HashRouter} from "react-router-dom";const store = configureStore({ reducer: rootReducer })

ReactDOM.render(

  
    <React.Fragment>    
      <Provider store={store}>
      <App />
      </Provider>

      
  </React.Fragment>,
 
  
  document.getElementById('root')
);


reportWebVitals();
