import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { WiDayFog } from 'react-icons/wi';

// hooks
import { useCityFetch } from './hooks/useCityFetch';

// components
import Search from './components/Search';
import SearchList from './components/SearchList';
import CityDetails from './components/CityDetails';
import Forecast from './components/Forecast';
import Footer from './components/Footer';
import { theme } from './themes';

function App() {
  const {
    state,
    loading,
    error,
    setSearchTerm,
    searchList,
    setSelectedCity,
    searchTerm,
  } = useCityFetch();
  const { forecast, timezone } = state;

  return (
    <ChakraProvider theme={theme}>
      <Container my={12} maxW='container.lg'>
        <HStack mb={4}>
          <Icon as={WiDayFog} fontSize='5xl' color='orange.100' />
          <Box>
            <Heading lineHeight='1' color='orange.200' fontStyle='italic'>
              city.weather
            </Heading>
            <Text lineHeight='1' color='gray.100' fontSize='sm'>
              created by Geraldine
            </Text>
          </Box>
        </HStack>
        <VStack spacing={6} align='stretch' pb={8}>
          <Box height={12}>
            <Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setSelectedCity={setSelectedCity}
              searchList={searchList}
            />
            <SearchList
              searchList={searchList}
              setSelectedCity={setSelectedCity}
            />
          </Box>
          {loading ? (
            <Box width='full' textAlign='center'>
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.100'
                color='orange.500'
                size='xl'
              />
            </Box>
          ) : (
            <>
              <CityDetails data={state} error={error} />
              {state.city && <Divider py={3} variant="dashed" />}
              <Forecast data={forecast} timezone={timezone} />
            </>
          )}
        </VStack>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
