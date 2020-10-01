import { Box, Button, Flex } from 'minerva-ui';
import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';
import { GlobalStyle } from './GlobalStyle';
import SEO from './SEO';

const NavLink = ({ children, href, ...props }) => (
  <Link passHref href={href} {...props}>
    <Button
      bg="transparent"
      color="white"
      border={0}
      _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
    >
      {children}
    </Button>
  </Link>
);

function Navigation() {
  return (
    <>
      <Flex
        as="nav"
        py="16px"
        bg="rgba(23, 25, 35, 1)"
        position="fixed"
        width="100%"
        top="0px"
        zIndex={1000}
      >
        <NavLink href="/">Home</NavLink>
        {/* <NavLink href="/blog">Blog</NavLink> */}
        <NavLink href="/about">About</NavLink>
      </Flex>
      <Box mb="75px" />
    </>
  );
}

export default function Layout({ children, ...props }) {
  return (
    <>
      <SEO {...props} />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://matthewfwood.com" />
      </Head>
      <div className="wrapper">
        <Navigation />
        {children}
        <Footer />
      </div>
      <GlobalStyle />
    </>
  );
}
