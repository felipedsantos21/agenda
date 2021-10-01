import React, { useState, useEffect } from 'react';
import { SearchBoxArea, SearchInput } from './styled';

const SearchBox = ({ search, onSearch }) => {

  const [inputActive, setInputActive] = useState(search === '' ? false : true);



  const handleInputFocus = () => {
    setInputActive(true);
  }

  const handleInputBlur = () => {
    if (search === '') {
      setInputActive(false);
    }
  }

  const handleChange = (e) => {
    onSearch(e.target.value);
  }


  return (
    <SearchBoxArea>
      <SearchInput
        type="text"
        placeholder="Digite um nome..."
        value={search}
        onChange={handleChange}
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </SearchBoxArea>
  );
}

export default SearchBox;