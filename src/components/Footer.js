import { Box, HStack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      bg='gray.800'
      bottom='0'
      fontSize={['xs', 'sm']}
      left='0'
      pos='fixed'
      width='full'>
      <Text as='' color='gray.50' pt={3} textAlign='center'>
        Developed by Geraldine Atayan
      </Text>
      <HStack
        color='gray.50'
        divider={<StackDivider borderColor='gray.500' />}
        pb={3}
        justifyContent='center'>
        <Text as='em' color='orange.200'>
          <a
            href='https://github.com/grcldq/city-weather'
            target='_blank'
            rel='noreferrer'>
            GitHub
          </a>
        </Text>
        <Text as='em'>
          API from{' '}
          <a
            href='https://openweathermap.org/'
            target='_blank'
            rel='noreferrer'
            style={{ color: '#89bdc1' }}>
            OpenWeather
          </a>
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
