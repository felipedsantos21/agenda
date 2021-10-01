import styled from 'styled-components';

export const Container = styled.div`
  //background-color:  #EEE;
  max-width: 1100px;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyArea = styled.div`
background-color: rgb(223, 254, 255);
width: 100%;
height: 700px;
padding: 10px;
border-radius: 10px;
box-shadow: 0px 0px 15px rgb(49,49,49);
display: flex;
`;

export const AsideArea = styled.aside`
//background-color: #147;
flex: 1;
display: flex;
flex-direction: column;
margin-right: 5px;
`;

export const PageBody = styled.div`
//background-color: #157;
flex: 2;
margin-left: 5px;
display:flex;
`;

