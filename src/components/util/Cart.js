import React from "react";
import Modal from "./Modal";
import styles from "./Cart.module.css";
import { useSelector,useDispatch } from 'react-redux'
import { cartAction } from "../../store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.cartItems);

  function removeItemHandler(id){
    dispatch(cartAction.removeToCart(id));
  }

  const CartItems = (
    <div className={styles["cart-items"]}>
      {cartItem.length ? cartItem.map((el) => (
        <div key={el.item_no} className={styles["cart_box"]} style={{background: el.opt_color}}>
            <div className={styles["cart_img_box"]}>
                <img className={styles["title_img"]} src={el.title_img} alt="아이템 이름 이미지" />
                <img className={styles["item_img"]} src={el.src[0]} alt="아이템 이미지" />
                <span className={styles["title"]}>{el.title}</span>
            </div>
            <img onClick={() => removeItemHandler(el.item_no)} className={styles["close_btn"]} src={process.env.PUBLIC_URL + "/assets/EGGDROP/close.png"} alt="취소 버튼"/>
            <span className={styles["item_price"]}>
                {(+el.price).toLocaleString()}원
            </span>
        </div>
      )): <div className={styles["no_list"]}>찜한 상품이 없습니다.</div>}
    </div>
  );

  return (
    <Modal onClick={() => dispatch(cartAction.HideCart())}>
      <div className={styles.total}>
        <span>메뉴</span>
        <span>가격</span>
      </div>
      {CartItems}
      <div className={styles.actions}>
        <button onClick={() => dispatch(cartAction.HideCart())} className={styles["button--alt"]}>
          닫기
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
