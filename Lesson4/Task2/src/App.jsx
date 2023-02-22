import React from 'react';
import Users from './users/Users';
import { Provider } from 'react-redux'
import './index.scss';
//import Counter from './components/Counter';
import store from './store.js';

const App = () => {
  return(
    <Provider store={store}>
      <Users />
    </Provider>
    
  );
};

export default App;