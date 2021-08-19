import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiSunrise, FiSunset, FiThermometer } from 'react-icons/fi';
import { IoRainyOutline } from 'react-icons/io5';
import { formatUnixTime } from '../helpers/helpers';
import IconWithLabel from './IconWithLabel';

const CityWeatherTiles = ({ data }) => {
  const { temp, feelsLike, sunrise, sunset, timezone, rain } = data;
  const sunTile = (icon, time, bg, color) => (
    <Box
      color={color}
      bg={bg}
      p={4}
      borderRadius={4}
      height='inherit'
      width='inherit'>
      <IconWithLabel icon={icon} label={formatUnixTime(time, timezone)} />
    </Box>
  );

  return (
    <Grid
      templateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ]}
      gap={2}
      fontWeight='medium'>
      <Box
        bg='gray.400'
        color='white'
        px={4}
        py={6}
        borderRadius={4}
        height='full'>
        <HStack height='inherit' justifyContent='center'>
          <Icon as={FiThermometer} fontSize='4xl' />
          <VStack>
            <Text fontSize='4xl' lineHeight='1.2'>
              {temp}°c
            </Text>
            <Text fontSize='sm' lineHeight='1.2'>
              Feels like {feelsLike}°c
            </Text>
          </VStack>
        </HStack>
      </Box>
      <Box
        bg='gray.700'
        color='white'
        p={6}
        borderRadius={4}
        height='inherit'
        textAlign='center'>
        <Icon as={IoRainyOutline} fontSize='5xl' mb={2} />
        <Text fontSize='sm' lineHeight='1.2'>
          Chance of rain: {rain}%
        </Text>
      </Box>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Grid
          height='inherit'
          width='full'
          gap={2}
          templateColumns={[
            'repeat(2, minmax(0, 1fr))',
            'repeat(2, minmax(0, 1fr))',
            'repeat(2, minmax(0, 1fr))',
            'repeat(1, minmax(0, 1fr))',
          ]}>
          {sunTile(FiSunrise, sunrise, 'yellow.400', 'black')}
          {sunTile(FiSunset, sunset, 'blue.800')}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default CityWeatherTiles;
