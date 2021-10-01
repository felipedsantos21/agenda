import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, BodyArea, AsideArea, PageBody } from './AppStyled';

import SearchBox from './pages/components/SearchBox';
import ContactBox from './pages/components/ContactBox';
import Menu from './pages/components/Menu';

import Routes from './Routes';


const App = () => {
  const [search, setSearch] = useState('');


  return (
    <BrowserRouter>
      <Container>
        <BodyArea>
          <AsideArea>
            <SearchBox search={search} onSearch={setSearch} />

            <ContactBox search={search} />

            <Menu />
          </AsideArea>
          <PageBody>
            <Routes />
          </PageBody>
        </BodyArea>
      </Container>
    </BrowserRouter>
  );
}

export default App;