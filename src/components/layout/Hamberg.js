import React from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { menuAction } from "../../store/drop-slice";

const Hamberg = () => {
  const dispatch = useDispatch();

  return (
    <Ham onClick={() => dispatch(menuAction.ToggleSideBar())}>
      <Line/>
      <Line/>
      <Line/>
    </Ham>
  );
};

export default Hamberg;

const Ham = styled.div`
width: 50px;
height: 50px;
cursor: pointer;
display: none;
padding: 10px;
box-sizing: border-box;
@media screen and (max-width : 1060px) {
  display: block;
}
`;

const Line = styled.div`
width: 100%;
height: 3px;
background-color: #000;
margin: 5px 0;
`;