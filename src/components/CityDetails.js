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
  Spinner,
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
    cityState,
    country,
    imgUrl,
    rain,
    sunrise,
    sunset,
    timezone,
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
            justifyContent='center'
            flex='1'>
            <Heading fontSize='3xl' color='yellow.400'>
              {city}, {cityState ? `${cityState}, ` : null}{country}
            </Heading>
            <Text fontSize='md'>{date}</Text>
            <Text fontSize='sm'>As of {time}</Text>
          </Flex>
          <Image
            boxSize='120px'
            objectFit='contain'
            src={imgUrl}
            alt='weather-img'
            fallback={<Spinner />}
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
