import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor} from './reducers/store';
import {PersistGate} from 'redux-persist/integration/react';
 
// write HOC' for these wrappers...
// If null is provided as a value then PersistGate simply loads nothing until persisted state is retrieved.

// Wrap your root component (Top level component) with PersistGate. This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider loading = {null} store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);