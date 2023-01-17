import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystem5LightTheme';
import StartupsComp from 'components/Startups/Startups';

const Startups = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Startups</title>
            <meta name="description" content="Startups page desc" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <StartupsComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Startups;
