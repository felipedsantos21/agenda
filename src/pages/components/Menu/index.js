import React from 'react';
import { Link } from 'react-router-dom';
import { MenuArea, MenuButton } from './styled';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ContactsIcon from '@material-ui/icons/Contacts';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';

const Menu = () => {
  return (
    <MenuArea>
      <MenuButton >
        <Link to='/'>
          <PersonAddIcon style={{ fontSize: 30 }} />
        </Link>
      </MenuButton >
      <MenuButton >
        <Link to='/'>
          <ContactsIcon style={{ fontSize: 30 }} />
        </Link>
      </MenuButton >
      <MenuButton >
        <Link to='/'>
          <EditIcon style={{ fontSize: 30 }} />
        </Link>
      </MenuButton >
      <MenuButton >
        <Link to='/'>
          <SettingsIcon style={{ fontSize: 30 }} />
        </Link>
      </MenuButton >
      <MenuButton >
        <Link to='/'>
          <DeleteIcon style={{ fontSize: 30 }} />
        </Link>
      </MenuButton >
    </MenuArea>
  );
}

export default Menu;