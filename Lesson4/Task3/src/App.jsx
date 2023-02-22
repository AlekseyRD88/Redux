import React from 'react';
import UsersList from './users/UsersList';
import { Provider } from 'react-redux'
import './index.scss';
import store from './store.js';

const App = () => {
  return(
    <Provider store={store}>
      <UsersList />
    </Provider>
    
  );
};

export default App;