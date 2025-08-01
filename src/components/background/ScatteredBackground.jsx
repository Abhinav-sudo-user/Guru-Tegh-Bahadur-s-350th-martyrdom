import React, { useEffect } from 'react';

const ScatteredBackground = ({
  imageSrc = '/flower.png',
  count = 40,
  size = 40,
  fallSpeed = 10_000 // 10 seconds per fall loop
}) => {
  useEffect(() => {
  const container = document.getElementById('scattered-container');

  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.className = 'scattered-image';

    const left = Math.random() * window.innerWidth;
    const sizeVar = size * (0.5 + Math.random()); // random size between 50% to 150%
    const delay = Math.random() * fallSpeed;
    const duration = fallSpeed + Math.random() * 4000;
    const rotateDir = Math.random() < 0.5 ? -1 : 1;
    const drift = Math.random() * 50 - 25; // side-to-side drift

    img.style.left = `${left}px`;
    img.style.top = `-${size}px`;
    img.style.width = `${sizeVar}px`;
    img.style.height = `${sizeVar}px`;
    img.style.animation = `fall-${i} ${duration}ms linear ${delay}ms infinite`;

    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes fall-${i} {
        0% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(${window.innerHeight + size}px) translateX(${drift}px) rotate(${rotateDir * 360}deg);
          opacity: 0;
        }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    container.appendChild(img);
  }

  return () => {
    container.innerHTML = '';
  };
}, [imageSrc, count, size, fallSpeed]);



  return (
    <div
      id="scattered-container"
      style={{
        backgroundColor: '#fef2d7',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ScatteredBackground;
