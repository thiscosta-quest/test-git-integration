import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystem5LightTheme';
import Web3Comp from 'components/Web3/Web3';

const Web3 = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Web3</title>
            <meta name="description" content="Web3 page desc" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Web3Comp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Web3;
