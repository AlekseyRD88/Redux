import React from 'react';
import TransferList from './options/TransferList';
import { Provider } from 'react-redux'
import './index.scss';
import store from './store.js';

const App = () => {
  return(
    <Provider store={store}>
      <TransferList />
    </Provider>
    
  );
};

export default App;