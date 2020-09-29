import { ThemeProvider, GlobalStyles, defaultTheme } from 'minerva-ui';

const customTheme = {
  ...defaultTheme,
  Text: {
    color: 'rgb(255, 255, 255)',
  },
  Heading: {
    color: 'rgb(255, 255, 255)',
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
