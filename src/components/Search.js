import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@chakra-ui/react';

const Search = ({
  searchTerm,
  setSearchTerm,
  setSelectedCity,
  searchList = [],
}) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!searchTerm || searchList.length === 0) setSelectedCity('');
      else {
        const { country, name, state: cityState, lat, lon } = searchList[0];

        setSelectedCity({ lat, lon, name, cityState, country });
      }
    }
  };

  useEffect(() => {
    // skips the initial render in useEffect()
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  useEffect(() => {
    setState(searchTerm);
  }, [searchTerm, setState]);

  return (
    <Input
      variant='outline'
      placeholder='City'
      focusBorderColor='teal.300'
      borderColor='gray.200'
      borderBottomRadius={searchList.length > 0 ? 'none' : 4}
      color='gray.900'
      bg='white'
      size='lg'
      onChange={(event) => setState(event.currentTarget.value)}
      onKeyDown={handleKeyDown}
      onBlur={handleKeyDown}
      value={state}
    />
  );
};

export default Search;
