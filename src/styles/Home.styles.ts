import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Banner = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`;

export const Video = styled.div`
  height: 100%;
  width: 100%;

  video {
    filter: grayscale();
    object-fit: cover;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: block;
`;

export const BannerTitle = styled.h1`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${(props) => props.theme.color};
  pointer-events: none;
`;

export const Headline = styled.span`
  display: block;
  font-size: 23rem;
  font-weight: 900;
  line-height: 0.76;
`;
