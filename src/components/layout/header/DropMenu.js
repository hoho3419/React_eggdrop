import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { menuAction } from '../../../store/drop-slice';
import styled from 'styled-components';

const bottom1 = [
  ['NEW', 'EGGDROP\'S CHOICE','SANDWICH', 'SIDE', 'COFFEE','DRINK'],
  ['BRAND', 'NOTICE', 'HISTORY'],
  ['FAQ', '고객문의']
] 

const DropMenu = () => {
  const menuVisible = useSelector(state => state.menu.menuVisible);
  const dispatch = useDispatch();


  return (
    <DropUl
    style={{opacity: menuVisible ? 1 : 0, zIndex: menuVisible ? 999 : -1 }} 
    onMouseEnter={() => dispatch(menuAction.ShowMenu())} 
    onMouseLeave={() => dispatch(menuAction.HideMenu())}>
      <DropLi>
        {bottom1[0].map((el) => (
          <Span 
          key={el}
          >{el}</Span>
        ))}
      </DropLi>
      <DropLi>
        {bottom1[1].map((el) => (
          <Span 
          key={el}
          >{el}</Span>
        ))}
      </DropLi>
      <DropLi>
        {bottom1[2].map((el) => (
          <Span 
          key={el}
          >{el}</Span>
        ))}
      </DropLi>
    </DropUl>
  );
};

export default DropMenu;

const DropUl = styled.ul`
position: fixed;
left: 0;
top: 6rem;
width: 100%;
height: auto;
background-color: #fff;
display: flex;
justify-content: center;
padding: 1.4rem 0;
gap: 4.3rem;
transition: all .5s;
@media screen and (max-width : 687px) {
  display: none;
}
`;

const DropLi = styled.li`
display: flex;
flex-direction: column;
padding: 0 3rem;
`
const Span = styled.span`
font-size: 1.2rem;
padding: 0.6rem;
cursor: pointer;
&:hover{
  color:red
}
`