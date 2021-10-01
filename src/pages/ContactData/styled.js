import styled from 'styled-components';

export const ContactDataArea = styled.div`
//background-color: burlywood;
flex:1;


display: flex;
flex-direction: column;
justify-content: space-around;
`;

export const TitleContact = styled.h1`
//background-color: blueviolet;
text-align: center;
font-style: italic;
color: rgb(2, 102, 147);
`;

export const ContactData = styled.div`
//background-color: brown;
flex:1;
`;

export const FieldsetBox = styled.fieldset`
margin-bottom: 10px;
border: 1px solid rgb(2, 102, 147);;
border-radius: 10px;
`;

export const LegendFieldset = styled.legend`
font-size: 16px;
font-weight: 500;
color: rgb(2, 102, 147);
`;

export const LabelBox = styled.label``;

export const InputBox = styled.input`
  width: ${props => props.width ? props.width : '50'}px;
  height: 25px;
  margin: 5px;
  padding: 2px 5px;
  border: 2px solid rgb(2, 102, 147);
  border-radius: 8px;
  font-size: 15px;
  outline: none;

  &:focus{    
    border: 2px solid rgb(47, 170, 225);
  }
`;

export const SelectBox = styled.select`
  width: ${props => props.width ? props.width : '104'}px;
  height: 33px;
  margin: 5px 0px 5px 5px;
  padding: 2px 5px;
  border: 2px solid rgb(2, 102, 147);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: 0;
  font-size: 15px;
  outline: none;

  &:focus{    
    border: 2px solid rgb(47, 170, 225);
  }
`;

export const OptionItem = styled.option``;

export const InputSelect = styled.input`
  width: ${props => props.width ? props.width : '120'}px;
  height: 25px;
  margin: 5px 5px 5px 0px;
  padding: 2px 5px;
  border: 2px solid rgb(2, 102, 147);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 15px;
  outline: none;

&:focus{    
    border: 2px solid rgb(47, 170, 225);
  }
`;


export const SelectBoxLocation = styled.select`
  width: 170px;
  height: 33px;
  margin: 5px 0px 5px 5px;
  padding: 2px 5px;
  border: 2px solid rgb(2, 102, 147);
  border-radius: 8px;
  font-size: 15px;
  outline: none;

  &:focus{    
    border: 2px solid rgb(47, 170, 225);
  }
`;

export const InputTextArea = styled.textarea`
  width: 660px;
  height: 100px;
  margin: 5px 0px 5px 5px;
  padding: 2px 5px;
  border: 2px solid rgb(2, 102, 147);
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  resize: none;

`;


/*
export const = styled.``;
*/