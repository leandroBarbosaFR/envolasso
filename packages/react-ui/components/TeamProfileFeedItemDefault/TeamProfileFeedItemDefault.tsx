import React, { useState } from 'react';
import type { TeamProfileFeedItemDefaultTheme } from '@agency-platform/themes';
import { ImageTag } from '../ImageTag';
import type { Media } from '@agency-platform/shared-types';
import { useTheme } from 'styled-components';
import ButtonLink from '../ButtonLink';
// Styles
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledExcerptWrap from './components/StyledExcerptWrap';
import StyledImage from './components/StyledImage';
import StyledImageEffect from './components/StyledImageEffect';
import StyledFeedItem from './components/StyledFeedItem';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
export interface TeamProfileFeedItemDefaultProps {
  layoutVariant: keyof TeamProfileFeedItemDefaultTheme;
  title: string;
  position: string;
  excerpt: string;
  featureImage: Media;
  contactLinks?: any;
  dynamicRoute?: string;
  isHorizontalFeed?: boolean;
  featureImageEffect: Media;
}
const TeamProfileFeedItemDefault = ({
  layoutVariant,
  title,
  position,
  excerpt,
  featureImage,
  contactLinks,
  // dynamicRoute,
  isHorizontalFeed,
  featureImageEffect
}: TeamProfileFeedItemDefaultProps) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  // const { translation } = useFlexConfig();
  const [isClicked, setIsClicked] = useState(false);

  const imageSrc = featureImage?.asset?.url;
  const blurDataURL = featureImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;

  const imageSrcEffect = featureImageEffect?.asset?.url;
  const blurDataURLEffect = featureImageEffect?.asset?.metadata?.lqip;
  const fallbackImgSrcEffect = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <StyledFeedItem layoutVariant={layoutVariant} isHorizontalFeed={isHorizontalFeed}>
      <StyledGrid
        layoutVariant={layoutVariant}
        withRowGap={theme.TeamProfileFeedItemDefault[layoutVariant!].StyledGrid.withRowGap}
        withColGapp={theme.TeamProfileFeedItemDefault[layoutVariant!].StyledGrid.withColGapp}
      >
        {imageSrc && (
          <StyledImage
            layoutVariant={layoutVariant}
            style={{
              // position: 'absolute',
              gridColumn: '1/3',
              gridRow: '1/4',
              opacity: isHovered ? 0 : 1,
              transition: 'opacity 0.6s easy',
              top: '0',
              left: '0,',
              width: '100%',
              height: '100%'
            }}
          >
            <ImageTag
              layoutVariant={'responsiveRounded'}
              src={imageSrc}
              fallbackImgSrc={fallbackImgSrc}
              blurDataURL={blurDataURL}
              alt={featureImage?.alt}
              caption={featureImage?.caption}
              width={900}
              height={900}
              cropWidth={900}
              cropHeight={900}
              fit={'crop'}
              priority={false}
              fill={false}
              // placeholder={'blur'}
            />
          </StyledImage>
        )}
        {imageSrcEffect && (
          <StyledImageEffect
            layoutVariant={layoutVariant}
            style={{
              // position: 'absolute',
              gridColumn: '1/3',
              gridRow: '1/4',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.6s easy',
              top: '0',
              left: '0,',
              width: '100%',
              height: '100%'
            }}
          >
            <ImageTag
              layoutVariant={'responsiveRounded'}
              src={imageSrcEffect}
              fallbackImgSrc={fallbackImgSrcEffect}
              blurDataURL={blurDataURLEffect}
              alt={featureImage?.alt}
              caption={featureImage?.caption}
              width={900}
              height={900}
              cropWidth={900}
              cropHeight={900}
              fit={'crop'}
              priority={false}
              fill={false}
              // placeholder={'blur'}
            />
          </StyledImageEffect>
        )}

        {/* Video Hover Effect */}
        {/* <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            gridRow: '1/3',
            gridColumn: '6/7',
            // position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Placeholder color
            borderRadius: '8px',
            overflow: 'hidden' // Hide video overflow
          }}
        >
          {isHovered ? (
            <video
              style={{
                gridRow: '1/3',
                gridColumn: '6/7',
                // position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              autoPlay
              loop
              muted
            >
              <source
                src="https://video.wixstatic.com/video/49687e_36d0c620e2574f3eaf0b559e7e51347c/1080p/mp4/file.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(path-to-your-thumbnail.jpg)', // Optional thumbnail
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          )}
        </div> */}

        {excerpt && (
          <StyledExcerptWrap layoutVariant={layoutVariant}>
            <StyledExcerpt
              variant={
                theme.TeamProfileFeedItemDefault[layoutVariant!].StyledExcerptWrap.StyledExcerpt.variant
              }
              layoutVariant={layoutVariant}
            >
              <p>{excerpt}</p>
            </StyledExcerpt>
          </StyledExcerptWrap>
        )}
        {title && (
          <StyledHeadingWrap layoutVariant={layoutVariant}>
            <StyledHeading
              as={'h1'}
              variant={
                theme.TeamProfileFeedItemDefault[layoutVariant!].StyledHeadingWrap.StyledHeading.variant
              }
              layoutVariant={layoutVariant}
            >
              {title}
            </StyledHeading>
          </StyledHeadingWrap>
        )}
        {contactLinks && (
          <StyledCtaNavWrap
            layoutVariant={layoutVariant}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonLink
              href={`https://www.biancagarutti.com/`}
              variant={'buttonBlackBorderTeam'}
              withText={true}
              withIcon={true}
              iconName="arrowRightNew"
              iconPosition="right"
            >
              {contactLinks.title}BG Studio
            </ButtonLink>
          </StyledCtaNavWrap>
        )}
        {position && (
          <StyledSubTitleWrap layoutVariant={layoutVariant}>
            <StyledSubTitle
              as={'h3'}
              variant={
                theme.TeamProfileFeedItemDefault[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant
              }
              layoutVariant={layoutVariant}
            >
              {position}
            </StyledSubTitle>
          </StyledSubTitleWrap>
        )}
      </StyledGrid>
    </StyledFeedItem>
  );
};

export default TeamProfileFeedItemDefault;
