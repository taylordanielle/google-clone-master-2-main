import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchProvider } from './SearchProvider';
import reducer, { initialState } from './reducer';

import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider initialState={initialState} reducer={reducer}>
    <App />
  </SearchProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

