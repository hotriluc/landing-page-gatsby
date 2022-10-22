import React, { useEffect, useRef } from 'react';
import {
  Banner,
  BannerTitle,
  Canvas,
  Headline,
  Video,
} from '../../styles/Home.styles';
import video from '../../assets/video/video.mp4';
import useWindowSize from '../../hooks/useWindowSize';

function HomeBanner() {
  const canvas = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    let renderingElement: HTMLCanvasElement = canvas.current!;
    let drawingElement = renderingElement.cloneNode() as HTMLCanvasElement;

    let renderingContext = renderingElement.getContext('2d');
    let drawingContext = drawingElement.getContext('2d');

    // let { lastX, lastY };
    let moving = false;
    if (renderingContext) {
      renderingContext.globalCompositeOperation = 'source-over';
      renderingContext.fillStyle = '#000';
      renderingContext.fillRect(0, 0, size.width, size.height);
    }
  }, []);

  return (
    <Banner>
      <Video>
        <video height="100%" width="100%" loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </Video>
      <Canvas ref={canvas} />
      <BannerTitle>
        <Headline>DIG</Headline>
        <Headline>DEEP</Headline>
      </BannerTitle>
    </Banner>
  );
}

export default HomeBanner;
