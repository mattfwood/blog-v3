import { Box, Button, Flex } from 'minerva-ui';
import Link from 'next/link';
import { createGlobalStyle } from 'styled-components';
import SEO from './SEO';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --site-color: royalblue;
    --divider-color: rgba(0, 0, 0, 0.4);
  }

  html {
    font: 100%/1.5 system-ui;
    background-color: rgb(23, 25, 35);
    color: rgb(255, 255, 255);
  }

  a {
    color: inherit;
    text-decoration-color: var(--divider-color);
    text-decoration-thickness: 2px;
  }

  a:hover {
    color: var(--site-color);
    text-decoration-color: currentcolor;
  }

  h1 {
    font-size: 48px;
  }

  h1,
  p {
    margin-bottom: 1.5rem;
  }

  code {
    font-family: 'Menlo';
  }

  .wrapper {
    max-width: 700px;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  [data-name='live-editor'] textarea, [data-name='live-editor'] pre {
    padding: 1rem !important;
  }

  .prism-code {
    font-size: 1rem;
    padding: 2rem 1rem 1rem 1rem;
    webkit-overflow-scrolling: touch;
    background-color: rgb(1, 22, 39);
    color: rgb(214, 222, 235);
    min-width: 100%;
    margin-bottom: 0;
    margin-top: 0;
    overflow: auto;
  }

  .line-number-style {
    display: inline-block;
    width: 3em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    opacity: 0.3;
    text-align: center;
    position: relative;
  }

  .token-line {
    color: rgb(214, 222, 235);
    margin-left: -1rem;
    margin-right: -1rem;
    min-width: 100%;
  }

  /* .post-header h1 {
    margin-bottom: 0;
  } */

  /* .post-header {
    margin-bottom: 2rem;
  } */
  .description {
    opacity: 0.6;
  }
`;

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
        bg="rgba(23, 25, 35, 0.8)"
        position="fixed"
        width="100%"
        top="0px"
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
      <div className="wrapper">
        <Navigation />
        {children}
      </div>
      <GlobalStyle />
    </>
  );
}
