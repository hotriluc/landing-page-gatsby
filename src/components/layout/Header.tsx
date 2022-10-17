import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { CursorType } from '../../interfaces/Cursor';
import { uiActions } from '../../store/ui-store';
import { Container, Flex } from '../../styles/Global.styles';
import { HeaderNav, Logo, Menu } from '../../styles/Header.styles';

interface HeaderProps {
  onCursor: (cursorType: CursorType) => void;
}

function Header({ onCursor }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.ui.theme);

  const toggleTheme = () => {
    dispatch(uiActions.setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <HeaderNav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={() => onCursor(null)}
          >
            <Link to="/">B</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor('cursor')}
              onMouseLeave={() => onCursor(null)}
            ></span>
            <Link to="/">W</Link>
          </Logo>

          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
}

export default Header;
