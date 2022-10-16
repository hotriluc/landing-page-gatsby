import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderNav = styled(motion.div)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`;

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }

  span {
    height: 1rem;
    width: 1rem;
    background-color: ${(props) => props.theme.grey};
    display: inline-block;
    position: relative;
    border-radius: 50%;
    margin: 0 4px;
    bottom: 2px;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    span {
      width: 36px;
      height: 4px;
      display: block;
      background-color: ${(props) => props.theme.color};
      margin: 8px;
    }
  }
`;
