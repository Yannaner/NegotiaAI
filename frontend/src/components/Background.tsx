import { useEffect, useRef } from 'react';

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createShape = () => {
      const shape = document.createElement('div');
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.animationDuration = `${15 + Math.random() * 10}s`;
      shape.style.opacity = `${0.1 + Math.random() * 0.1}`;
      shape.style.width = shape.style.height = `${20 + Math.random() * 60}px`;
      container.appendChild(shape);

      shape.addEventListener('animationend', () => {
        shape.remove();
      });
    };

    const interval = setInterval(createShape, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-pattern" />
      <div ref={containerRef} className="floating-shapes" />
    </>
  );
};

export default Background;
