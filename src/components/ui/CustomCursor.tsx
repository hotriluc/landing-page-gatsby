import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { Cursor } from '../../styles/Global.styles';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorType = useAppSelector((state) => state.ui.cursorType);
  const menuIsToggled = useAppSelector((state) => state.ui.toggleMenu);

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor
        className={`${!!cursorType ? 'hovered' : ''} ${cursorType} ${
          menuIsToggled ? 'nav-open' : ''
        }`}
        style={{ top: mousePosition.y, left: mousePosition.x }}
      />
    </>
  );
}

export default CustomCursor;
