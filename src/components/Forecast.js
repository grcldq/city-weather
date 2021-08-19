import React from 'react';
import { Grid, Box } from '@chakra-ui/layout';
import {
  VStack,
  Image,
  Text,
  Icon,
  HStack,
  StackDivider,
} from '@chakra-ui/react';
import { FiSun, FiMoon, FiCloudDrizzle } from 'react-icons/fi';

import { formatUnixDate } from '../helpers/helpers';
import IconWithLabel from './IconWithLabel';

const Forecast = ({ data = [] }) => {
  if (data.length === 0) return null;

  return (
    <>
      <VStack>
        <HStack
          divider={<StackDivider borderColor='gray.500' />}
          color='gray.100'>
          <Text>
            Morning Temperature <Icon as={FiSun} />
          </Text>
          <Text>
            Evening Temperature <Icon as={FiMoon} />
          </Text>
          <Text>
            Chance of Rain <Icon as={FiCloudDrizzle} />
          </Text>
        </HStack>
        <Grid
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(7, 1fr)',
          ]}
          gap={1}>
          {data.map((item, index) => {
            const { dt, temp, rain, imgUrl } = item;
            const { morn, night } = temp;

            return (
              <Box
                key={`forecast-${index}`}
                bg='gray.600'
                color='lightGray.50'
                px={3}
                py={5}
                borderRadius={4}>
                <VStack spacing={1}>
                  <Text>{formatUnixDate(dt)}</Text>
                  <Image objectFit='cover' src={imgUrl} alt='weather-img' />
                  <Box>
                    <IconWithLabel icon={FiSun} label={`${morn}°c`} />
                    <IconWithLabel icon={FiMoon} label={`${night}°c`} />
                    <IconWithLabel icon={FiCloudDrizzle} label={`${rain}%`} />
                  </Box>
                </VStack>
              </Box>
            );
          })}
        </Grid>
      </VStack>
    </>
  );
};

export default Forecast;
