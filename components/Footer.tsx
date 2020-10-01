import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, Button, Stack } from 'minerva-ui';

const Footer = () => (
  <Flex as="footer" alignItems="center" mb="60px" flexDirection="column">
    <Stack horizontal mb={4}>
      <Link href="https://github.com/matthewfwood" isExternal>
        <Button
          height="3rem"
          minWidth="3rem"
          aria-label="GitHub"
          bg="transparent"
          border={0}
          p={0}
          _active={{
            bg: 'rgba(255, 255, 255, 0.08)',
          }}
          _hover={{
            bg: 'rgba(255, 255, 255, 0.08)',
          }}
          color="rgb(113, 128, 150)"
        >
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
            width="18px"
            height="18px"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </g>
          </svg>
        </Button>
      </Link>
    </Stack>
    <Stack horizontal>
      <NextLink href="/uses" passHref>
        {/* @ts-ignore */}
        <Link fontSize="16px" color="rgb(160, 174, 192)" title="Uses">
          /uses
        </Link>
      </NextLink>
    </Stack>
  </Flex>
);

export default Footer;
