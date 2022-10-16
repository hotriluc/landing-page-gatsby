import React from 'react';

/**
 * styled-components
 */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

/**
 * components
 */
import Header from './Header';

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
  const darkTheme = {
    background: '#000',
    color: '#ffffff',
  };

  const lightTheme = {
    background: '#fff',
    color: '#000',
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
