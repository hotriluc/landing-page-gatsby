import styled, { css } from 'styled-components';

export const Container = styled.div<{ fluid?: boolean }>`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  // If Container component has props fluid apply this css
  ${(props) =>
    props.fluid &&
    css`
      max-width: 100%;
      padding: 0;
      margin: 0;
    `}
`;

export const Flex = styled.div<{
  flexEnd?: boolean;
  spaceBetween?: boolean;
  alignTop?: boolean;
  noHeight?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

    ${(props) =>
    props.alignTop &&
    css`
      align-items: top;
    `}

    ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.red};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.cursor {
    border: 2px solid ${(props) => props.theme.color} !important;
  }
  &.hovered {
    background-color: transparent !important;
    border: 2px solid ${(props) => props.theme.red};
    height: 48px;
    width: 48px;
  }
  &.nav-open {
    background-color: ${(props) => props.theme.color};
  }
`;
