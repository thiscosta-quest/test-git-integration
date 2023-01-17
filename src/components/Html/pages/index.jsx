import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystem5LightTheme';
import XdSketchUsersComp from 'components/XdSketchUsers/XdSketchUsers';

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Home page</title>
            <meta name="description" content="Home page desc" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <XdSketchUsersComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Home;
