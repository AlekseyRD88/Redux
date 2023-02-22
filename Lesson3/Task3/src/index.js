import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';

/*

store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(removeProduct(1));
store.dispatch(setUser({ name: 'James' }));
store.dispatch(removeUser());

console.log(store.getState()); */