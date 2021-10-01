import styled from 'styled-components';

export const SearchBoxArea = styled.div`
  background-image: linear-gradient(to bottom, rgb(93, 204, 255) 60%, transparent);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const SearchInput = styled.input`
  background-color: rgb(255,255,255);
  background-image: url('/assets/search.png');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  width: ${props => props.active === true ? '290' : '0'}px;
  height: 50px;
  padding-left: 50px;
  margin-right: 10px;
  border: 0;
  border-radius: 25px;
  outline: none;
  font-size: 15px;
  text-transform: uppercase;
  transition: all ease 0.4s;
  cursor: pointer;

  &:focus{
    cursor: text;
  }
`;