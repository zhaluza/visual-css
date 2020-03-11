import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import styles from '../client/scss/application.scss';

render(
  <Provider>
    <App />
  </Provider>,

  document.getElementById('root')
);
