import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice';
import dropSlice from './drop-slice';

const store = configureStore({
  reducer: {cart: cartSlice,menu: dropSlice},
})

export default store;