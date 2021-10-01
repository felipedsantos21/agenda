import styled from 'styled-components';

export const MenuArea = styled.div`
background-image: linear-gradient(to top, rgb(93, 204, 255) 40%, transparent);
width: 100%;
height: 60px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const MenuButton = styled.div`
background-color: rgb(255,255,255);
flex:1;
margin: 5px;
border-radius: 20px;

  a{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    color: rgb(0,0,0);
    transform: scale(0.8);
    transition: all ease 0.2s;
  }

  a:hover{
    transform: scale(1);
  }
`;



