// src/variants.js
export const fadeIn = (direction, duration=0.5 ) => {
    return {
      hidden: {
        y: direction === 'up' ? 50 : -50,
        x:0,
        opacity:0,
        //  direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
        damping: 25,
        delay: duration,
        //   duration: 1.2,
        //   delay: 0.2,
        //   ease: [0.25, 0.25, 0.25, 0.75],
        }
      }
    }
  };
  