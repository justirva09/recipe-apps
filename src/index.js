import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/scss/index.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'libraries';
import { store } from 'modules';


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
