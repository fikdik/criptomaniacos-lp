import React from 'react';
import Link from '../atoms/Link';
import { chakra, Flex, Heading } from '@chakra-ui/react';

const P = (props) => <chakra.p mb={4} {...props} />;
const H2 = (props) => (
  <Heading
    as="h2"
    fontSize="3xl"
    mb={4}
    pb={2}
    fontWeight="700"
    position="relative"
    _after={{
      content: '" "',
      w: '5rem',
      borderBottom: '2px',
      borderColor: 'brand.500',
      position: 'absolute',
      bottom: 0,
      left: 0,
    }}
    {...props}
  />
);

const H3 = (props) => (
  <Heading as="h3" fontWeight="700" fontSize="xl" mb={4} {...props} />
);

const H4 = (props) => <Heading as="h4" fontSize="base" mb={4} {...props} />;

const components = {
  Flex,
  Link,
  P,
  a: Link,
  p: P,
  h1: H2,
  h2: H3,
  h3: H4,
};

export default components;
