import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './App';
import AnimationHOC from './Pages/AnimationHOC';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimationHOC>
        <App />
      </AnimationHOC>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


