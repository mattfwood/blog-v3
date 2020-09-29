import { ThemeProvider, GlobalStyles, defaultTheme } from 'minerva-ui';
import { MinervaTheme } from 'minerva-ui/dist/theme';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const customTheme: MinervaTheme = {
  ...defaultTheme,
  Text: {
    color: 'rgb(255, 255, 255)',
    fontSize: '17px'
  },
  Heading: {
    color: 'rgb(255, 255, 255)',
    lineHeight: 1.25
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
