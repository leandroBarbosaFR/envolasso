import React, { useEffect, useRef } from 'react';
import { PortableTextBlock } from '@portabletext/types';
import { PortfolioFeedItemDefaultTheme } from '@agency-platform/themes';
import { EmbedServices, Media } from '@agency-platform/shared-types';
import useTruncate from '../../hooks/useTruncate';
// Theme
import { useTheme } from 'styled-components';
// Components
import ButtonLink from '../ButtonLink';
import { ImageTag } from '../ImageTag';
// Styles
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledExcerptWrap from './components/StyledExcerptWrap';
import StyledFeedInner from './components/StyledFeedInner';
import StyledFeedItem from './components/StyledFeedItem';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledImage from './components/StyledImage';
// GSAP
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface PortfolioFeedItemDefaultProps {
  layoutVariant: keyof PortfolioFeedItemDefaultTheme;
  isHorizontalFeed?: boolean;
  title: string;
  subtitle?: string;
  excerpt: string;
  body: PortableTextBlock;
  featureImage: Media;
  postMedoiaVariant: string;
  embedServices: EmbedServices;
  slug: { current: string };
  dynamicRoute: string;
}

const PortfolioFeedItemDefault = ({
  layoutVariant,
  title,
  excerpt,
  featureImage,
  slug,
  dynamicRoute,
  isHorizontalFeed
}: PortfolioFeedItemDefaultProps) => {
  const theme = useTheme();
  const truncateExcerpt = useTruncate(
    excerpt,
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.truncateValue || 120
  );
  const imageSrc = featureImage?.asset?.url;
  const blurDataURL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBgaAAAAIUAgbVRNccAAAAASUVORK5CYII=';
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;

  // References for elements to animate
  const titleRef = useRef<HTMLHeadingElement>(null);
  const excerptRef = useRef<HTMLDivElement>(null);
  const feedItemRef = useRef<HTMLDivElement>(null);

  // GSAP animation when the component mounts or scrolls into view
  useEffect(() => {
    // ScrollTrigger will animate the items when they enter the viewport
    ScrollTrigger.create({
      trigger: feedItemRef.current, // The element to trigger the animation
      start: 'top 80%', // Trigger when the top of the element reaches 80% of the viewport height
      end: 'bottom 20%', // End the animation when the bottom reaches 20%
      scrub: true,
      markers: false,
      onEnter: () => {
        // Animate feed item
        gsap.from(feedItemRef.current, {
          duration: 1.8, // Longer duration for smoother entry
          opacity: 0,
          y: 50, // Slide up animation from the bottom
          ease: 'expo.out', // Smooth easing
        });

        // Animate the title
        gsap.from(titleRef.current, {
          duration: 1.5,
          x: -150, // Slide in from left
          opacity: 0,
          ease: 'expo.out', // Smooth easing
        });

        // Animate the excerpt (reveal from the bottom)
        gsap.from(excerptRef.current, {
          duration: 1.5,
          y: 50,
          opacity: 0,
          ease: 'expo.out', // Smooth easing
        });
      },
      onLeave: () => {
        // Optionally reset styles when it leaves the viewport
        gsap.set(feedItemRef.current, { opacity: 0, visibility: 'hidden' });
      },
      onEnterBack: () => {
        // Optionally reset styles when it comes back into the viewport
        gsap.set(feedItemRef.current, { opacity: 1, visibility: 'visible' });
      },
    });
  }, []);

  return (
    <StyledFeedItem
      layoutVariant={layoutVariant}
      isHorizontalFeed={isHorizontalFeed}
    >
      <StyledImage layoutVariant={layoutVariant}>
        <ImageTag
          layoutVariant={theme.PortfolioFeedItemDefault[layoutVariant!].ImageTag.layoutVariant}
          src={imageSrc}
          fallbackImgSrc={fallbackImgSrc}
          blurDataURL={blurDataURL}
          alt={featureImage?.alt}
          caption={featureImage?.caption}
          width={theme.PortfolioFeedItemDefault[layoutVariant!].ImageTag.width}
          height={theme.PortfolioFeedItemDefault[layoutVariant!].ImageTag.height}
          cropWidth={theme.PortfolioFeedItemDefault[layoutVariant!].ImageTag.cropWidth}
          cropHeight={theme.PortfolioFeedItemDefault[layoutVariant!].ImageTag.cropHeight}
          fit={theme.PortfolioFeedItemDefault[layoutVariant!].ImageTag.fit}
          priority={false}
          fill={false}
        />
      </StyledImage>
      <StyledFeedInner layoutVariant={layoutVariant}>
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PortfolioFeedItemDefault[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PortfolioFeedItemDefault[layoutVariant!].StyledGrid.withColGapp}
        >
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h2'}
                variant={
                  theme.PortfolioFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.variant
                }
                layoutVariant={layoutVariant}
                ref={titleRef} // Attach ref to the title
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {excerpt && (
            <StyledExcerptWrap layoutVariant={layoutVariant}>
              <StyledExcerpt
                variant={
                  theme.PortfolioFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.variant
                }
                layoutVariant={layoutVariant}
                ref={excerptRef} // Attach ref to the excerpt
              >
                <p>{truncateExcerpt}</p>
              </StyledExcerpt>
            </StyledExcerptWrap>
          )}
          {slug && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <ButtonLink
                href={`/${dynamicRoute}${slug?.current}`}
                variant={theme.PortfolioFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.variant}
                withIcon={theme.PortfolioFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.withIcon}
                iconName={theme.PortfolioFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.iconName}
                iconPosition={
                  theme.PortfolioFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.iconPosition
                }
              >
                {theme.PortfolioFeedItemDefault[layoutVariant!].StyledCtaNavWrap.Button.text}
              </ButtonLink>
            </StyledCtaNavWrap>
          )}
        </StyledGrid>
      </StyledFeedInner>
    </StyledFeedItem>
  );
};

export default PortfolioFeedItemDefault;
