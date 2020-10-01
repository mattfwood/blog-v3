import { CSSReset } from 'minerva-ui';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import { createGlobalStyle } from 'styled-components';
import SEO from '../next-seo.config';
import { customTheme } from '../utils/customTheme';

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
