import React from 'react';

export default function useMedia() {
  const [media, setMedia] = React.useState(() => {
    return window.innerWidth;
  });

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setMedia(window.innerWidth);
    });
    return () =>
      window.removeEventListener('resize', () => {
        setMedia(window.innerWidth);
      });
  }, [window.innerWidth]);

  return media;
}
