import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';

import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import SnackBarReducer from './snackBar/snackBar.reducer';

const persistConfig={
    key:'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user:UserReducer,
    cart:CartReducer,
    shop:shopReducer,
    snackBarReducer:SnackBarReducer,
})

export default persistReducer(persistConfig , rootReducer);

// export default combineReducers({
//     user:UserReducer,
//     cart:CartReducer
// })