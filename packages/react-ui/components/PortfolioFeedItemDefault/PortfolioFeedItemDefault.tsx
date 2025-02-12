import React, { useEffect, useRef } from 'react';
import { PortableTextBlock } from '@portabletext/types';
import { PortfolioFeedItemDefaultTheme } from '@agency-platform/themes';
import { EmbedServices, Media } from '@agency-platform/shared-types';
import useTruncate from '../../hooks/useTruncate';
import { useTheme } from 'styled-components';
import ButtonLink from '../ButtonLink';
import { ImageTag } from '../ImageTag';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledExcerptWrap from './components/StyledExcerptWrap';
import StyledFeedInner from './components/StyledFeedInner';
import StyledFeedItem from './components/StyledFeedItem';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledImage from './components/StyledImage';
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

  const titleRef = useRef<HTMLHeadingElement>(null);
  const excerptRef = useRef<HTMLDivElement>(null);
  const feedItemRef = useRef<HTMLDivElement>(null);
  const feedInnerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial scroll animation
    ScrollTrigger.create({
      trigger: feedItemRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,
      markers: false,
      onEnter: () => {
        gsap.from(feedItemRef.current, {
          duration: 1.8,
          opacity: 0,
          y: 50,
          ease: 'expo.out'
        });

        gsap.from(titleRef.current, {
          duration: 1.5,
          x: -150,
          opacity: 0,
          ease: 'expo.out'
        });

        gsap.from(excerptRef.current, {
          duration: 1.5,
          y: 50,
          opacity: 0,
          ease: 'expo.out'
        });
      }
    });

    // Hover animations
    if (feedInnerRef.current && titleRef.current && imageRef.current) {
      // Reset positions
      gsap.set(titleRef.current, {
        y: 0
      });
      gsap.set(imageRef.current, {
        scale: 1
      });

      // Create hover animations
      const titleAnimation = gsap.to(titleRef.current, {
        y: -50,
        duration: 0.4,
        ease: 'power2.out',
        paused: true
      });

      const imageAnimation = gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out',
        paused: true
      });

      // Add event listeners
      feedInnerRef.current.addEventListener('mouseenter', () => {
        titleAnimation.play();
        imageAnimation.play();
      });

      feedInnerRef.current.addEventListener('mouseleave', () => {
        titleAnimation.reverse();
        imageAnimation.reverse();
      });

      // Cleanup
      return () => {
        if (feedInnerRef.current) {
          feedInnerRef.current.removeEventListener('mouseenter', () => {
            titleAnimation.play();
            imageAnimation.play();
          });
          feedInnerRef.current.removeEventListener('mouseleave', () => {
            titleAnimation.reverse();
            imageAnimation.reverse();
          });
        }
      };
    }
  }, []);

  return (
    <StyledFeedItem layoutVariant={layoutVariant} isHorizontalFeed={isHorizontalFeed}>
      <StyledImage layoutVariant={layoutVariant} ref={imageRef}>
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
      <StyledFeedInner layoutVariant={layoutVariant} ref={feedInnerRef}>
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
                ref={titleRef}
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
                ref={excerptRef}
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
