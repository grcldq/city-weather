import { Box, StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const SearchList = ({ searchList = [], setSelectedCity }) => {
  if (searchList.length === 0) return null;

  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'>
      {searchList.map((item, index) => {
        const state = item.state ? `${item.state}, ` : '';
        const { lat, lon, state: cityState, name, country } = item;

        return (
          <Box
            key={`search-${index}`}
            bg='lightGray.100'
            color='gray.900'
            py={3}
            px={7}
            borderBottomRadius={index === searchList.length - 1 ? 2 : 0}
            boxShadow='md'
            onClick={() =>
              setSelectedCity({ lat, lon, name, cityState, country })
            }
            zIndex={3}
            cursor='pointer'>
            <Text fontSize='md' fontWeight='semibold' as='u'>
              {item.name}, {state}
              {item.country}
            </Text>
          </Box>
        );
      })}
    </VStack>
  );
};

export default SearchList;
