import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import DropMenu from './header/DropMenu';
import { useDispatch,useSelector } from 'react-redux';
import { menuAction } from '../../store/drop-slice';
import { cartAction } from '../../store/cart-slice';
import Hamberg from './Hamberg';
import SideBar from './header/SideBar';

const TheHeader = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.cartItems);

  return (
    <>
      <Container 
      onMouseEnter={() => dispatch(menuAction.ShowMenu())}
      onMouseLeave={() => dispatch(menuAction.HideMenu())}
      style={{boxShadow: '0 0 10px rgb(0 0 0 / 20%)'}}>
        <ContainerBox>
          <ImgBox>
            <Link to='/'>
              <Img src={'/assets/EGGDROP/로고.png'} alt='logo' />
            </Link>
          </ImgBox>
          <Navbar>
            <Hamberg />
            <StyledLink to='menu'>MENU</StyledLink>
            <StyledLink to='menu'>STORE</StyledLink>
            <StyledLink to='menu'>ABOUT</StyledLink>
            <StyledLink to='menu'>CONTACT</StyledLink>
            <WishBox>
              <Img 
              style={{height: '2.4rem'}}
              src={"/assets/EGGDROP/shopping-cart.png"}
              alt="쇼핑카트 이미지"
              onClick={() => dispatch(cartAction.ShowCart())}
              />
              <WishBtn onClick={() => dispatch(cartAction.ShowCart())}>{cartItem.length} 찜하기</WishBtn>
            </WishBox>
          </Navbar>
        </ContainerBox>
      </Container>
      <DropMenu/>
      <SideBar />
    </>
  );
};

export default TheHeader;

const mediaHam = 1060;

const Flex = styled.div`
  position: relative;
  display: flex;
`;

const Container = styled(Flex)`
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: #fff;
  z-index : 99999;
`
const ContainerBox = styled(Container)`
  width: 90%;
  justify-content: center;
  position: relative;
`

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ImgBox = styled(Box)`
position: absolute;
left: 0;
top: 10px;
z-index: 99;
@media screen and (max-width : ${mediaHam}px) {
  left: 50%;
  transform: translateX(-50%);
}
`;

const Img = styled.img`
  height: 5rem;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`

const Navbar = styled.div`
display: flex;
justify-content: end;
@media screen and (max-width : ${mediaHam}px) {
  width: 100%;
  justify-content: space-between;
}
` 
const StyledLink = styled(Link)`
  background-color: transparent;
  border: none;
  text-decoration: none;
  display: flex;
  align-items : center;
  cursor: pointer;
  padding: 0rem 0.5rem;
  font-size: 1.5rem;
  margin: 0 1.5rem;
  font-weight: bold;
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
@media screen and (max-width : ${mediaHam}px) {
  display: none
}
`
const WishBox = styled(Box)`
height: 2.4rem;
position: absolute;
right: 0;
top: 50%;
transform: translateY(-50%);
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
};
@media screen and (max-width : ${mediaHam}px) {
  display: none
};
`