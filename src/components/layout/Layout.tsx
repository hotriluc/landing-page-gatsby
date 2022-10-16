import React from 'react';

/**
 * styled-components
 */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import { useAppSelector } from '../../hooks/store-hooks';

/**
 * components
 */
import Header from './Header';

// Context

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        text-decoration: none;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${(props) => props.theme.background};
        color:  ${(props) => props.theme.color};
        overscroll-behavior: none;
        overflow-x: hidden;
    }
`;

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const currentTheme = useAppSelector((state) => state.ui.theme);

  const darkTheme = {
    background: '#000',
    color: '#ffffff',
    grey: '#c6bebe',
  };

  const lightTheme = {
    background: '#fff',
    color: '#000',
    grey: '#c6bebe',
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
