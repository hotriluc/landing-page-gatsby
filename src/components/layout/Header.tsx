import { Link } from 'gatsby';
import React from 'react';
import { Container, Flex } from '../../styles/Global.styles';
import { HeaderNav, Logo, Menu } from '../../styles/Header.styles';

function Header(): JSX.Element {
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">B</Link>
            <span></span>
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
