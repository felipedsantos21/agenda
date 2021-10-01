import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  ContactBoxArea,
  ContactItem,
  ContactName,
  ContactLine,
  ContactEmail
} from './styled';

import api from '../../../api';

const ContactBox = ({ search }, props) => {

  const [contacts, setContacts] = useState([]);
  const [idContact, setIdContact] = useState('');

  useEffect(() => {

    const getContacts = async () => {
      const cont = await api.getContacts();
      setContacts(cont.result);
    };

    getContacts();

  }, []);


  const teste = (e) => {
    let it = e;
    alert(it);

    props.setOrInfoUser(it);
  }



  return (
    <ContactBoxArea>
      {/*
      <ContactItem>
        <ContactName>{name.length < 32 ? name : name.substring(0, 32) + '...'}</ContactName>
        <ContactLine />
        <ContactEmail>{email.length < 29 ? email : email.substring(0, 29) + '...'} | (21)99725-0454</ContactEmail>
      </ContactItem>
      */}

      Num: {props.id}
      {contacts.length > 0 &&
        <>
          {contacts.map((item, index) => (
            <ContactItem onClick={() => teste(item.or_infocontato)}>
              <ContactName>
                {item.nome}
              </ContactName>
              <ContactLine />
              <ContactEmail>felipedsantos21@gmail.com | (21)99725-0454</ContactEmail>
            </ContactItem>
          ))}
        </>
      }
    </ContactBoxArea >
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
    setOrInfoUser: (newOrInfoUser) => dispatch({
      type: 'SET_ORINFOUSUARIO',
      payload: { orInfoUser: newOrInfoUser }
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactBox);