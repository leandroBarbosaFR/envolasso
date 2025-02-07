/**
 * // useWindowDimension.ts
 * * This hook returns the viewport/window height and width
 */

import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

type WindowDimention = {
  isMobile: boolean;
  isMobileLarge: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWidescreen: boolean;
};

const useWindowDimension = (): WindowDimention => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileLarge, setIsMobileLarge] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isWidescreen, setIsWidescreen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    function handleResize(): void {
      if (window.innerWidth < theme.breakpoints.mobileLarge) {
        setIsMobile(true);

        setIsMobileLarge(false);
        setIsTablet(false);
        setIsDesktop(false);
        setIsWidescreen(false);
      }
      if (
        window.innerWidth >= theme.breakpoints.mobileLarge &&
        window.innerWidth < theme.breakpoints.tablet
      ) {
        setIsMobileLarge(true);

        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(false);
        setIsWidescreen(false);
      }
      if (window.innerWidth >= theme.breakpoints.tablet && window.innerWidth < theme.breakpoints.desktop) {
        setIsTablet(true);

        setIsMobile(false);
        setIsMobileLarge(false);
        setIsDesktop(false);
        setIsWidescreen(false);
      }
      if (
        window.innerWidth >= theme.breakpoints.desktop &&
        window.innerWidth < theme.breakpoints.widescreen
      ) {
        setIsDesktop(true);

        setIsMobile(false);
        setIsMobileLarge(false);
        setIsTablet(false);
        setIsWidescreen(false);
      }
      if (window.innerWidth >= theme.breakpoints.widescreen) {
        setIsWidescreen(true);

        setIsMobile(false);
        setIsMobileLarge(false);
        setIsTablet(false);
        setIsDesktop(false);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return {
    isMobile,
    isMobileLarge,
    isTablet,
    isDesktop,
    isWidescreen
  };
};

export default useWindowDimension;
