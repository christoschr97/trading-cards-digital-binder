import React, { useEffect, useRef } from 'react';
// Import the sound file - you'll need to download a suitable sound effect
import pageFlipSound from '../assets/sounds/page-flip.mp3';

const PageFlipSound = ({ play }) => {
  const audioRef = useRef(null);
  
  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => {
        // Autoplay policies might prevent this - that's okay
        console.log("Couldn't play sound automatically", e);
      });
    }
  }, [play]);

  return (
    <audio ref={audioRef} src={pageFlipSound} preload="auto" />
  );
};

export default PageFlipSound;
