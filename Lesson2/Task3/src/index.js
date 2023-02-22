import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 1, name: 'Leon' }));
store.dispatch(addUser({ id: 2, name: 'Julio' }));
store.dispatch(deleteUser(1));
console.log('State: ', store.getState());
