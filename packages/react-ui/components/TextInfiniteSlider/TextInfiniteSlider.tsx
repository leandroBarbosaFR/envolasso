import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';



const messages = [
  'Music Industry',
  'Brand Identity',
  'Scalability',
  'Design'
];

const TextInfiniteSlider = () => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      gsap.to("#text-message", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentMessage(messages[index]);
          gsap.to("#text-message", { opacity: 1, duration: 0.5 });
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      id="text-message"
      style={{
        textAlign: 'center',
        fontSize: '100px',
        lineHeight: '130px',
        color: 'transparent',
        position: 'absolute',
        paddingLeft: '50px',
        left: '0',
        top: '50%',
        background: 'linear-gradient(to top, transparent 0%, rgba(255, 255, 255, 0.6) 100%)', // Gradient from bottom to top
        WebkitBackgroundClip: 'text', // Apply the gradient to text
      }}
    >
      {currentMessage}
    </h1>
  );
};

export default TextInfiniteSlider;
