import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { cartAction } from './store/cart-slice';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Deal from './pages/Deal';
import Menu from './pages/Menu';
import Footer from './components/layout/Footer';
import Cart from './components/util/Cart';

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'auto'
  })
}

function App() {
  const dispatch = useDispatch();
  const [cartShowState, setCartShowState] = useState(false);
  useEffect(() => {
    dispatch(cartAction.fetchCartItem());
  }, [dispatch])


  return (
    <BrowserRouter>
      <div className="App">
        <Header
          onHideCart={() => setCartShowState(false)}
          onShowCart={() => setCartShowState(true)}
          cartState={cartShowState}
        />
        {cartShowState && <Cart
          onHideCart={() => setCartShowState(false)}
        />}
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
