import React, { useState } from 'react';

/**
 * styled-components
 */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';

/**
 * components
 */
import Header from './Header';
import CustomCursor from '../ui/CustomCursor';
import { uiActions } from '../../store/ui-store';
import { CursorType } from '../../interfaces/Cursor';
import { Navigation } from './Navigation';

// Context

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        text-decoration: none;
        cursor: none;
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
  const dispatch = useAppDispatch();

  const onCursor = (cursorType: CursorType) => {
    dispatch(uiActions.setCursorType(cursorType));
  };

  const darkTheme = {
    background: '#000',
    color: '#ffffff',
    red: 'red',
  };

  const lightTheme = {
    background: '#fff',
    color: '#000',
    red: 'red',
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor />
      <Navigation onCursor={onCursor} />
      <Header onCursor={onCursor} />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
