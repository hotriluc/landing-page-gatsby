import React from 'react';
import { Container } from '../../styles/Global.styles';
import { HeaderNav } from '../../styles/Header.styles';

function Header(): JSX.Element {
  return (
    <HeaderNav>
      <Container>
        hello
        {/* <Flex>
          <Logo></Logo>

          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex> */}
      </Container>
    </HeaderNav>
  );
}

export default Header;
