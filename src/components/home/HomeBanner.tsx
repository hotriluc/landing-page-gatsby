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
import { useAppSelector } from '../../hooks/store-hooks';
import { CursorType } from '../../interfaces/Cursor';

interface HomeBannerProps {
  onCursor: (cursorType: CursorType) => void;
}

function HomeBanner({ onCursor }: HomeBannerProps) {
  const canvas = useRef(null);
  const size = useWindowSize();
  const theme = useAppSelector((state) => state.ui.theme);

  useEffect(() => {
    let renderingElement: HTMLCanvasElement = canvas.current!;
    let drawingElement = renderingElement.cloneNode() as HTMLCanvasElement;

    let renderingContext = renderingElement.getContext('2d');
    let drawingContext = drawingElement.getContext('2d');

    let lastX = 0;
    let lastY = 0;
    let moving = false;
    if (renderingContext) {
      renderingContext.globalCompositeOperation = 'source-over';
      renderingContext.fillStyle = theme === 'dark' ? '#000' : '#fff';
      renderingContext.fillRect(0, 0, size.width, size.height);
    }

    // mouse moving on canvas
    renderingElement.addEventListener('mouseover', (e) => {
      moving = true;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageY - renderingElement.offsetTop;
    });

    // mouse outside canvas
    renderingElement.addEventListener('mouseup', (e) => {
      moving = false;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('mousemove', (e) => {
      if (moving && renderingContext && drawingContext) {
        drawingContext.globalCompositeOperation = 'source-over';
        renderingContext.globalCompositeOperation = 'destination-out';

        let currentX = e.pageX - renderingElement.offsetLeft;
        let currentY = e.pageY - renderingElement.offsetTop;

        drawingContext.lineJoin = 'round';
        drawingContext.moveTo(lastX, lastY);
        drawingContext.lineTo(currentX, currentY);
        drawingContext.closePath();
        drawingContext.lineWidth = 120;
        drawingContext.stroke();
        lastX = currentX;
        lastY = currentY;

        renderingContext.drawImage(drawingElement, 0, 0);
      }
    });
  }, [theme]);

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <Banner>
      <Video>
        <video height="100%" width="100%" loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </Video>
      <Canvas
        key={theme}
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={() => onCursor(null)}
      />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>DIG</Headline>
        <Headline variants={child}>DEEP</Headline>
      </BannerTitle>
    </Banner>
  );
}

export default HomeBanner;
