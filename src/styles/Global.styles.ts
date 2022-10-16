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
