import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { cartAction } from './store/cart-slice';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Deal from './pages/Deal';
import Menu from './pages/Menu';
import Footer from './components/layout/Footer';
import Cart from './components/util/Cart';
import TheHeader from './components/layout/TheHeader';

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'auto'
  })
}

function App() {
  const dispatch = useDispatch();
  const cartVisible = useSelector(state => state.cart.cartVisible);

  useEffect(() => {
    dispatch(cartAction.fetchCartItem());
  }, [dispatch])


  return (
    <BrowserRouter>
      <div className="App">
        <TheHeader />
        {cartVisible && <Cart/>}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/deal/:id' element={<Deal />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
