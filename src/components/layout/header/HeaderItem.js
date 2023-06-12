import React from "react";
import styled from "styled-components";

const HeaderLi = (props) => {
  const cart = useSelector(state => state.cart.cartItems);


  return (
    <Li className={props.id === 4 ? styles[props.liClass] : styles[props.OtherLiClass]}>
      <div
        onMouseLeave={props.onMouseLeave}
        onMouseEnter={props.onMouseEnter}
        className={styles[props.menuClass]}>
        {props.id === 4 ? <img className={styles[props.cartClass]} src={process.env.PUBLIC_URL + "/assets/EGGDROP/shopping-cart.png"} alt="쇼핑카트 이미지" /> : " "}

        <span onClick={props.onClick}>
          <LineBox>{props.menuText}</LineBox>
          {props.id === 4 ? <span className={styles.cart_text}> {cart.length ? cart.length : "0"}개</span> : " "}
        </span>
      </div>
      <ul
        className={[styles[props.childUl], props.active === 1 ? styles.bot_ul_active : ""].join(" ")}
        onMouseLeave={props.onMouseLeave} onMouseEnter={props.onMouseEnter}
      >
        {props.liText && props.liText.map((el, idx) => (
          <DropLi key={idx} text={el} />
        ))}
      </ul>
    </Li>
  )
}
const Li = styled.li`
  width: 180px;
`

const LineBox = styled.span`
position: relative;
&::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 5px;
  background-color: #ea0029;
  border-radius: 20px;
};

&:hover::after {
  transition: all .5s;
  width: 100%;
}
`