import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { chakra, Link as ChakraLink } from '@chakra-ui/react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Link = ({ children, href, ...rest }) => {
  switch (href) {
    case undefined: {
      return (
        <ChakraLink as={'button'} {...rest} disabled>
          {children}
        </ChakraLink>
      );
    }
    case '': {
      return (
        <ChakraLink as={'button'} {...rest} disabled>
          {children}
        </ChakraLink>
      );
    }
    case (href.match(/^\/(?!\/)/) || {}).input: {
      if (href === '/_admin') {
        return (
          <ChakraLink href={href} {...rest} display="block">
            {children}
          </ChakraLink>
        );
      }
      return (
        <ChakraLink as={GatsbyLink} to={href} {...rest} display="block">
          {children}
        </ChakraLink>
      );
    }
    default: {
      return (
        <ChakraLink
          as={OutboundLink}
          href={href}
          {...rest}
          target="_blank"
          rel="noopener noreferrer"
          display="block"
        >
          {children}
        </ChakraLink>
      );
    }
  }
};

export default chakra(Link);
