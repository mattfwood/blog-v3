import { ThemeProvider, CSSReset, defaultTheme } from 'minerva-ui';
import { MinervaTheme } from 'minerva-ui/dist/theme';
import { DefaultSeo } from 'next-seo';
import { createGlobalStyle } from 'styled-components';
import SEO from '../next-seo.config';

export const customTheme: MinervaTheme = {
  ...defaultTheme,
  Text: {
    color: 'rgb(255, 255, 255)',
    fontSize: '17px',
  },
  Heading: {
    color: 'rgb(255, 255, 255)',
    lineHeight: 1.25,
  },
  icons: {},
};

const CSSResetStyles = createGlobalStyle`
  ${CSSReset}
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <DefaultSeo {...SEO} />
      <CSSResetStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
