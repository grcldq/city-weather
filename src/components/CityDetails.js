import React from 'react';
import {
  HStack,
  Text,
  Image,
  Box,
  Grid,
  Flex,
  Heading,
  GridItem,
} from '@chakra-ui/react';
import { formatUnixDate, formatUnixTime } from '../helpers/helpers';
import CityWeatherTiles from './CityWeatherTiles';

// render selected city details
const CityDetails = ({ data, error }) => {
  if (error) return <Text as='em' color='white' textAlign='center'>Sorry! Something went wrong. (╥_╥)</Text>;
  if (!data.city) return <Text as='em' color='white' textAlign='center'>No city selected.</Text>;

  const {
    temp,
    feelsLike,
    city,
    country,
    imgUrl,
    timezone,
    rain,
    sunrise,
    sunset,
  } = data;
  const date = formatUnixDate(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    weekday: 'short',
  });
  const time = formatUnixTime(undefined, timezone);

  return (
    <Box color='white'>
      <Grid
        templateColumns={[
          'repeat(1, minmax(0, 1fr))',
          'repeat(1, minmax(0, 1fr))',
          'repeat(1, minmax(0, 1fr))',
          'repeat(3, minmax(0, 1fr))',
        ]}>
        <HStack>
          <Flex
            flexDirection='column'
            alignItems='flex-start'
            justifyContent='center'>
            <Heading fontSize='3xl' color='yellow.400'>
              {city}, {country}
            </Heading>
            <Text fontSize='md'>{date}</Text>
            <Text fontSize='sm'>As of {time}</Text>
          </Flex>
          <Image
            boxSize='120px'
            objectFit='cover'
            src={imgUrl}
            alt='weather-img'
          />
        </HStack>
        <GridItem colSpan={[1, 1, 1, 2]}>
          <CityWeatherTiles
            data={{
              temp,
              feelsLike,
              sunrise,
              sunset,
              timezone,
              rain,
            }}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CityDetails;
