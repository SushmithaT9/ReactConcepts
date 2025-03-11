import React from 'react';
import ReactDOM from 'react-dom/client'; //Use createRoot from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

// Get root element
const root = document.getElementById('root');

if (root) {
  const reactRoot = ReactDOM.createRoot(root); //Use createRoot
  reactRoot.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
