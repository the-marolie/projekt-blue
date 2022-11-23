import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

export const ArtBoard = (props) => {
  const canvasEl = useRef(null);
  useEffect(() => {
    const options = {
      isDrawingMode: true,
      width: 1000,
      height: 700,
      backgroundColor: '#ffffff',
    };
    const canvas = new fabric.Canvas(canvasEl.current, options);
    props.setCanvas(canvas);
    return () => {
      props.setCanvas(null);
      canvas.dispose();
    }

  }, []);

  return (
    <canvas width="300" height="300" ref={canvasEl} />
  )
};