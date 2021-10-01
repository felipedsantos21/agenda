import styled from 'styled-components';

export const ContactBoxArea = styled.div`
background-image: linear-gradient(to bottom, rgba(93, 204, 255, 0), rgba(93, 204, 255,1) 60%, rgba(93, 204, 255, 0)) ;
flex:1;
padding: 5px;
overflow: hidden;
overflow-y: auto;

  &::-webkit-scrollbar{
    background-color: rgb(135, 217, 255);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: rgb(5, 149, 216);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover{
    background-color: rgb(86, 171, 210);
    border-radius: 10px;
  }
`;

export const ContactItem = styled.div`
  background-color: rgb(255,255,255);
  width: 100%;
  height: 56px;
  margin-top: 5px;
  padding-top: 5px;
  border-radius: 20px;
  transform: scale(0.98);
  transition: all ease 0.2s;

  &:hover{
    transform: scale(1);
    cursor: pointer;
  }
`;

export const ContactName = styled.span`
  display: flex;
  margin-top: 5px;
  margin-left: 10px;
  text-transform: capitalize;
`;

export const ContactLine = styled.hr`
  width: 95%;
  margin: 3px auto;
`;

export const ContactEmail = styled.span`
display:flex;
margin-left: 10px;
font-size: 13px;
font-weight: 400;
font-style: italic;
text-transform: lowercase;
`;