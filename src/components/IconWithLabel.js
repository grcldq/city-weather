import React from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';

const IconWithLabel = ({ icon, label, justify = 'flex-start' }) => {
  return (
    <HStack justifyContent={justify}>
      <Icon as={icon} fontSize='xl' />
      <Text>{label}</Text>
    </HStack>
  );
};

export default IconWithLabel;
