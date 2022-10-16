import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { uiActions } from '../../store/ui-store';
import { Container, Flex } from '../../styles/Global.styles';
import { HeaderNav, Logo, Menu } from '../../styles/Header.styles';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.ui.theme);

  const toggleTheme = () => {
    dispatch(uiActions.setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">B</Link>
            <span onClick={toggleTheme}></span>
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
