import { useEffect, useState } from 'react';

import { BREAKPOINT_DESKTOP } from '../constants/breakpoints';

function useMobileDetect(width = BREAKPOINT_DESKTOP): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const handleSizeChange = () => setIsMobile(window.innerWidth < width);
  useEffect(() => {
    setIsMobile(window.innerWidth < width);
    window.addEventListener('resize', handleSizeChange);
    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, []);
  return isMobile;
}

export default useMobileDetect;
