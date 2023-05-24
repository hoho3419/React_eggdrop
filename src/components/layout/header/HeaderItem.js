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
.top_li{
  width: 100%;
  height: 100%;
  line-height: 90px;
  font-size: 24px;
  font-weight: 700;
  position: relative;
}
.top_li .cart{
  width: 18%;
  transform: translateY(4px);
  margin-right: 15px;
}
.top_li span{
  cursor: pointer;
}
.cart_text{

}
.bot_ul{
  height: 330px;
  line-height: 50px;
  width: 100%;
  font-size: 18px;
  position: relative;
  z-index: 99999;
  pointer-events: none;
  opacity: 0;
  transition: all .1s;
  transform: translateY(20px);
}
.bot_ul_active{
  opacity: 1;
  pointer-events: auto;
  transition: all .4s;
  transform: translateY(0px);
  transition-delay: .2s;
}
.bot_ul li{
  white-space: nowrap;
  cursor: pointer;
}
.bot_ul li:hover{
  color: #ea0029;
}