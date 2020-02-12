import React from 'react';
// Redux
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducer/Reducers'
// Component
import HeaderWrap from './components/HeaderWrap';
import Counter from './components/Counter';
import CounterView from './components/CounterView';
// Style
import './App.css';

// Redux Dev Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  composeEnhancers(),
)
/* eslint-enable */

const App = () => {
  return (
    <Provider store={store}>
      {/* Header */}
      <HeaderWrap />
      <CounterView />
      <Counter />
    </Provider>
  )
};

export default App;
