import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import store, { history } from './store'
import App from './App'
import React from 'react'
import registerServiceWorker from './registerServiceWorker';
import './i18n';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)


registerServiceWorker();
