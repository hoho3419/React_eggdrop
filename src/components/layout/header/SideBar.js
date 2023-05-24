import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { cartAction } from "../../../store/cart-slice";
import { menuAction } from "../../../store/drop-slice";



const SideBar = () => {
  const dispatch = useDispatch();
  const sideBarVisible = useSelector(state => state.menu.sideBarVisible);

return (
  <Container style={{transform: sideBarVisible ? 'translateX(0)' : 'translateX(-100%)'}}>
    <HamNav>
      <SideHam onClick={() => dispatch(menuAction.ToggleSideBar())}>
        <Line/>
        <Line/>
        <Line/>
      </SideHam>
    </HamNav>
    <MenuNav>
      <StyledLink to='menu'>MENU</StyledLink>
      <StyledLink to='menu'>STORE</StyledLink>
      <StyledLink to='menu'>ABOUT</StyledLink>
      <StyledLink to='menu'>CONTACT</StyledLink>
      <WishBox>
        <Img 
        style={{height: '2.4rem',filter: 'invert(100%)' }}
        src={"/assets/EGGDROP/shopping-cart.png"}
        alt="쇼핑카트 이미지"
        onClick={() => dispatch(cartAction.ShowCart())}
        />
        <WishBtn onClick={() => dispatch(cartAction.ShowCart())}>찜하기</WishBtn>
      </WishBox>
    </MenuNav>
  </Container>
);
};

export default SideBar;

const Container = styled.div`
width: 18rem;
display: flex;
flex-direction: column;
height: 100vh;
background-color: rgb(0, 0, 0, .7);
transform: translateX(0);
transition: all 0.3s;
position: fixed;
left: 0;
top: 0px;
z-index: 99999999;
`;

const MenuNav = styled.div`
display: flex;
position: relative;
flex-direction: column;
color: #fff;
border-bottom: 1px solid;
`

const HamNav = styled.div`
width: 100%;
height: 6rem;
background-color: #000;
padding: 0 10px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
`;

const SideHam = styled.div`
cursor: pointer;
`

const Line = styled.div`
width: 3rem;
height: 0.4rem;
color: #fff;
background-color: #fff;
margin: 5px 0;
`;

const StyledLink = styled(Link)`
  background-color: transparent;
  border: none;
  text-decoration: none;
  display: flex;
  align-items : center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  justify-content: center;
  padding-top: 2rem;
  margin: 0.3rem 0rem;
&:hover {
  color:red;
}
`;

const WishBox = styled.div`
height: 2.4rem;
display: flex;
justify-content: center;
align-items: center;
justify-content: center;
padding-top: 2rem;
margin: 0.3rem 0rem;
`;

const WishBtn = styled.span`
display: flex;
align-items : center;
cursor: pointer;
padding: 0rem 0.5rem;
font-size: 1.5rem;
margin: 0rem 1.1rem;
font-weight: bold;
position: relative;
white-space: nowrap;

&:hover {
  color:red;
}
`;

const Img = styled.img`
  height: 5rem;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;