import React, { useEffect, useState, useRef } from 'react';
import { SplashScreenTheme } from '@agency-platform/themes';
import anime from 'animejs';
import { gsap } from 'gsap';
// Styles
import StyledBgWrapper from './components/StyledBgWrapper';
import StyledIcon from './components/StyledIcon';
import StyledHeading from './components/StyledHeading';
// Theme
import { useTheme } from 'styled-components';

import AgencyLogoNumber from '../../../../apps/next/components/svgs/AgencyLogoNumber';

// Define prop types
interface SplashScreenProps {
  layoutVariant: keyof SplashScreenTheme;
  isModalOpen: boolean;
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ layoutVariant, finishLoading }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const headingRefs = [useRef(null), useRef(null), useRef(null)]; // Array of refs for each heading
  const [activeTextIndex, setActiveTextIndex] = useState(-1); // Start with -1 to delay first text
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if splash screen has already been shown
    const hasShownSplash = localStorage.getItem('hasShownSplash');
    if (!hasShownSplash) {
      setIsVisible(true); // Show the splash screen
      localStorage.setItem('hasShownSplash', 'true'); // Mark as shown
    } else {
      finishLoading(); // Skip splash and directly finish loading
    }
  }, [finishLoading]);

  // Add slide-in animation for each heading when it appears
  useEffect(() => {
    headingRefs.forEach((ref, index) => {
      if (activeTextIndex === index && ref.current) {
        gsap.fromTo(
          ref.current,
          { y: 200, opacity: 0 }, // Start off-screen to the left
          {
            y: 0,
            opacity: 1,
            duration: 1.6, // Adjust duration for smoothness
            ease: 'power3.out'
          }
        );
      }

      if (activeTextIndex === 3 && logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { y: 200, opacity: 0 }, // Starting state: hidden to the right
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5, // Delay to start after heading finishes
            ease: 'power3.out'
          }
        );
      }
    });
  }, [activeTextIndex, headingRefs]);

  // Existing anime.js code for text transitions
  useEffect(() => {
    const fadeInDuration = 1000;
    const holdDuration = 2000;
    const fadeOutDuration = 800;

    const loader = anime.timeline({
      autoplay: true,
      complete: () => {
        setIsExiting(true);
        setTimeout(() => {
          setIsVisible(false);
          finishLoading();
        }, 500);
      }
    });

    loader
      .add({ delay: 200 }) // Small delay before first text appears
      .add({
        targets: `#text1`,
        opacity: [0, 1],
        duration: fadeInDuration,
        easing: 'easeOutExpo',
        begin: () => setActiveTextIndex(0)
      })
      .add({
        targets: `#text1`,
        opacity: [1, 0],
        duration: fadeOutDuration,
        easing: 'easeOutExpo',
        delay: holdDuration
      })
      .add({
        targets: `#text2`,
        opacity: [0, 1],
        duration: fadeInDuration,
        easing: 'easeOutExpo',
        begin: () => setActiveTextIndex(1)
      })
      .add({
        targets: `#text2`,
        opacity: [1, 0],
        duration: fadeOutDuration,
        easing: 'easeOutExpo',
        delay: holdDuration
      })
      .add({
        targets: `#text3`,
        opacity: [0, 1],
        duration: fadeInDuration,
        easing: 'easeOutExpo',
        begin: () => setActiveTextIndex(2)
      })
      .add({
        targets: `#text3`,
        opacity: [1, 0],
        duration: fadeOutDuration,
        easing: 'easeOutExpo',
        delay: holdDuration
      })
      .add({
        targets: `#AgencyLogoNumber`,
        opacity: [0, 1],
        duration: fadeOutDuration,
        easing: 'easeOutExpo',
        begin: () => setActiveTextIndex(3) // Update to show logo
      });

    return () => {
      loader.pause();
    };
  }, [finishLoading]);

  return (
    isVisible && (
      <StyledBgWrapper layoutVariant={layoutVariant} className={isExiting ? 'slide-up' : ''}>
        <div style={{ overflow: 'hidden' }}>
          {activeTextIndex === 0 && (
            <div id="text1">
              <StyledHeading layoutVariant={layoutVariant} variant="primary" ref={headingRefs[0]}>
                Développement Web
              </StyledHeading>
            </div>
          )}
          {activeTextIndex === 1 && (
            <div id="text2">
              <StyledHeading layoutVariant={layoutVariant} variant="primary" ref={headingRefs[1]}>
                Design UX/UI
              </StyledHeading>
            </div>
          )}
          {activeTextIndex === 2 && (
            <div id="text3">
              <StyledHeading layoutVariant={layoutVariant} variant="primary" ref={headingRefs[2]}>
                Conception Graphique
              </StyledHeading>
            </div>
          )}
          {activeTextIndex === 3 && (
            <div ref={logoRef}>
              <StyledIcon layoutVariant={layoutVariant}>
                <AgencyLogoNumber id="AgencyLogoNumber" />
              </StyledIcon>
            </div>
          )}
        </div>
      </StyledBgWrapper>
    )
  );
};

export default SplashScreen;
