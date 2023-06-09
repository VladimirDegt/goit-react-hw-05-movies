import { useState } from 'react';
import {
  StyledForm,
  StyledFormBtn,
  StyledFormInput,
} from './SearchMovie.styled';
import IconSearch from 'service/search-svg';

export function SearchMovie({ addMovie }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange({ target }) {
    setInputValue(target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (inputValue) {
      addMovie(inputValue);
      setInputValue('');
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormBtn type="submit">
        <IconSearch>Search</IconSearch>
      </StyledFormBtn>

      <StyledFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleInputChange}
        value={inputValue}
      />
    </StyledForm>
  );
}
