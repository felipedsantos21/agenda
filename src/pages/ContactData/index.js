import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ContactDataArea,
  TitleContact,
  ContactData,
  FieldsetBox,
  LegendFieldset,
  LabelBox,
  InputBox,
  SelectBox,
  OptionItem,
  InputSelect,
  SelectBoxLocation,
  InputTextArea
} from './styled';

const Page = (props) => {

  return (
    <ContactDataArea>
      <TitleContact>{props.name} - {props.id}</TitleContact>
      <ContactData>
        <FieldsetBox>
          <LegendFieldset>Contact Data</LegendFieldset>
          <LabelBox>
            <InputBox placeholder="Nome Completo" width={485} readOnly />
          </LabelBox>
          <LabelBox>
            <InputBox placeholder="CPF/CNPJ" width={150} readOnly />
          </LabelBox>
          <LabelBox>
            <InputBox placeholder="Nome para Contato" width={163} readOnly />
          </LabelBox>

          <LabelBox>
            <SelectBox disabled>
              <OptionItem>Celular</OptionItem>
            </SelectBox>
            <InputSelect placeholder="Telefone" width={120} readOnly />
          </LabelBox>
          <LabelBox>
            <SelectBox disabled>
              <OptionItem>WhatsApp</OptionItem>
            </SelectBox>
            <InputSelect placeholder="Telefone" width={120} readOnly />
          </LabelBox>

          <LabelBox>
            <SelectBox disabled>
              <OptionItem>Instagram</OptionItem>
            </SelectBox>
            <InputSelect placeholder="Contatos Eletrônicos" width={555} readOnly />
          </LabelBox>
          <LabelBox>
            <SelectBox disabled >
              <OptionItem>Site</OptionItem>
            </SelectBox>
            <InputSelect placeholder="Contatos Eletrônicos" width={555} readOnly />
          </LabelBox>



        </FieldsetBox>

        <FieldsetBox>
          <LegendFieldset>Address</LegendFieldset>

          <LabelBox>
            <InputBox placeholder="CEP" width={90} readOnly />
          </LabelBox>
          <LabelBox>
            <InputBox placeholder="Endereço" width={475} readOnly />
          </LabelBox>
          <LabelBox>
            <InputBox placeholder="Nº" width={46} readOnly />
          </LabelBox>
          <LabelBox>
            <InputBox placeholder="Complemento" width={150} readOnly />
          </LabelBox>
          <LabelBox>
            <InputBox placeholder="Bairro" width={120} readOnly />
          </LabelBox>

          <LabelBox>
            <SelectBox width={140} disabled >
              <OptionItem>Belo Horizonte</OptionItem>
            </SelectBox>
            <InputSelect placeholder="MG" width={25} readOnly />
          </LabelBox>

          <LabelBox>
            <SelectBoxLocation disabled>
              <OptionItem>São Francisco de Itabapoana</OptionItem>
            </SelectBoxLocation>
          </LabelBox>



        </FieldsetBox>

        <FieldsetBox>
          <LegendFieldset>Observations</LegendFieldset>

          <InputTextArea readOnly />
        </FieldsetBox>
      </ContactData>
    </ContactDataArea>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    id: state.user.orInfoUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);