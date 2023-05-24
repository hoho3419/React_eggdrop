import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { 
    cartItems: [],
    cartVisible: false,
  },
  reducers:{
    fetchCartItem(state){
      const cartBag = localStorage.getItem("cart")
      if(cartBag){
        const cartList = JSON.parse(cartBag);
        if(cartList.length >= 1){
          state.cartItems = cartList;
        }
      }
    },
    removeToCart(state,action){
      const id = action.payload;
      state.cartItems = state.cartItems.filter(el => el.item_no !== id);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    addToCart(state,action){
      const item_no = action.payload.item_no;
      const findCart = state.cartItems.find(el => el.item_no === item_no);
      if(findCart){
        state.cartItems = state.cartItems.filter(el => el.item_no !== item_no);
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
        return;
      }
      state.cartItems.push({
        item_no: action.payload.item_no,
        src: action.payload.src,
        title_img: action.payload.title_img,
        price: action.payload.price,
        title: action.payload.title,
        opt_color: action.payload.opt_color
      });
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    ShowCart(state){
      state.cartVisible = true;
    },
    HideCart(state){
      state.cartVisible = false;
    }
  }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;