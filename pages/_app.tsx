import { ThemeProvider, GlobalStyles, defaultTheme } from 'minerva-ui';
import { MinervaTheme } from 'minerva-ui/dist/theme';

const customTheme: MinervaTheme = {
  ...defaultTheme,
  Text: {
    color: 'rgb(255, 255, 255)',
  },
  Heading: {
    color: 'rgb(255, 255, 255)',
    lineHeight: 1.25
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
