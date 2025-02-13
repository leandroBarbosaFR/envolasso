import { Cta, Media, Carousel, DialogBox } from '@agency-platform/shared-types';

import { PortableText } from '@portabletext/react';
import React, { useRef } from 'react';
// Theme
import { useTheme } from 'styled-components';
import { HeroSectionTheme } from '@agency-platform/themes';
// Hooks
import useDialogBox from '../../hooks/useDialogBox';
// Components
import Button from '../Button';
import CustomPortableText from '../../utils/portableText';

import FadeCarousel from '../FadeCarousel';
import { ImageTag } from '../ImageTag';

import SlideCarousel from '../SlideCarousel';
import TextSlider from '../TextSlider';
// Styles
import StyledArrowDown from './components/StyledArrowDown';
import StyledImage from './components/StyledImage';
import StyledMediaWrapper from './components/StyledMediaWrapper';

import StyledSection from './components/StyledSection';
import StyledVideo from './components/StyledVideo';
import StyledArticle from './components/StyledArticle';
import StyledContainer from './components/StyledContainer';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';

export interface HeroSectionProps {
  layoutVariant: keyof HeroSectionTheme;
  title: string;
  standFirst: any;
  subtitle: string;
  cta: Cta[];
  isHeroSearchEnabled: boolean;
  isSlideTransition: boolean;
  heroType: string;
  heroFirstFrameImage: Media;
  heroImage: Media;
  heroStaticMedia: string;
  heroVideoUrl: string;
  carouselData: Carousel[];
  carouselType: 'homeCarousel' | 'homeContentCarousel' | 'artist';
}

const HeroSection = ({
  layoutVariant,
  title,
  standFirst,
  subtitle,
  cta,
  heroType,
  isSlideTransition,
  heroFirstFrameImage,
  heroImage,
  heroStaticMedia,
  heroVideoUrl,
  carouselType,
  carouselData
}: HeroSectionProps) => {
  const theme = useTheme();

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const isImage = heroStaticMedia === 'image';
  const imageSrc = heroImage?.asset?.url;
  const blurDataURL = heroImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;
  const heroFirstFrameImageSrc = heroFirstFrameImage?.asset?.url?.length
    ? heroFirstFrameImage?.asset?.url
    : fallbackImgSrc;
  const isArrowVisible = theme.HeroSection[layoutVariant!].StyledArrowDown.isArrowVisible;

  const handleScrollDown = () => {
    if (sectionRef && sectionRef?.current) sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <StyledSection layoutVariant={layoutVariant}>
        {heroType === 'static' ? (
          isImage ? (
            <StyledImage layoutVariant={layoutVariant}>
              <ImageTag
                layoutVariant={'fullScreen'}
                src={imageSrc}
                fallbackImgSrc={fallbackImgSrc}
                alt={heroImage?.alt}
                caption={heroImage?.caption}
                fill={true}
                priority={false}
                blurDataURL={blurDataURL}
              />
            </StyledImage>
          ) : (
            <StyledMediaWrapper layoutVariant={layoutVariant} heroFirstFrameImage={heroFirstFrameImageSrc}>
              <StyledVideo
                layoutVariant={layoutVariant}
                src={heroVideoUrl}
                frameBorder="0"
                allowFullScreen
                title={'show reel video'}
              />
            </StyledMediaWrapper>
          )
        ) : isSlideTransition ? (
          <>
            <SlideCarousel
              layoutVariant={theme.HeroSection[layoutVariant!].SlideCarousel.layoutVariant}
              carouselType={carouselType}
              data={carouselData}
              withLoop={theme.HeroSection[layoutVariant!].SlideCarousel.withLoop}
              withArrowButton={theme.HeroSection[layoutVariant!].SlideCarousel.withArrowButton}
              withThumbnails={theme.HeroSection[layoutVariant!].SlideCarousel.withThumbnails}
              autoSlide={theme.HeroSection[layoutVariant!].SlideCarousel.autoSlide}
            />
          </>
        ) : (
          <>
            <FadeCarousel
              layoutVariant={theme.HeroSection[layoutVariant!].FadeCarousel.layoutVariant}
              carouselType={carouselType}
              data={carouselData}
              withLoop={theme.HeroSection[layoutVariant!].FadeCarousel.withLoop}
              withArrowButton={theme.HeroSection[layoutVariant!].FadeCarousel.withArrowButton}
              withThumbnails={theme.HeroSection[layoutVariant!].FadeCarousel.withThumbnails}
              autoSlide={theme.HeroSection[layoutVariant!].FadeCarousel.autoSlide}
            />
          </>
        )}
        <StyledContainer
          isFluid={theme.HeroSection[layoutVariant!].StyledContainer.isFluid}
          layoutVariant={layoutVariant}
        >
          <StyledGrid
            layoutVariant={layoutVariant}
            withRowGap={theme.HeroSection[layoutVariant!].StyledGrid.withRowGap}
            withColGapp={theme.HeroSection[layoutVariant!].StyledGrid.withColGapp}
          >
            {subtitle && (
              <StyledSubTitleWrap layoutVariant={layoutVariant}>
                <StyledSubTitle
                  as={'h2'}
                  layoutVariant={layoutVariant}
                  variant={theme.HeroSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
                >
                  {subtitle}
                </StyledSubTitle>
              </StyledSubTitleWrap>
            )}
            {title && (
              <StyledHeadingWrap layoutVariant={layoutVariant}>
                <StyledHeading
                  as={'h1'}
                  layoutVariant={layoutVariant}
                  variant={theme.HeroSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
                >
                  <TextSlider text={title} />
                </StyledHeading>
              </StyledHeadingWrap>
            )}
            {standFirst && (
              <StyledArticle
                layoutVariant={layoutVariant}
                variant={theme.HeroSection[layoutVariant!].StyledArticle.variant}
              >
                <PortableText value={standFirst} components={CustomPortableText} />
              </StyledArticle>
            )}
            {cta && (
              <StyledCtaNavWrap layoutVariant={layoutVariant}>
                <StyledCtaNav
                  layoutVariant={layoutVariant}
                  data={cta}
                  variant={theme.HeroSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
                  ctaTitle={undefined}
                />
              </StyledCtaNavWrap>
            )}
          </StyledGrid>
        </StyledContainer>

        {/* Button to jump to next section from hero */}
        {/* {isArrowVisible && (
          <StyledArrowDown layoutVariant={layoutVariant}>
            <Button
              variant={theme.HeroSection[layoutVariant!].StyledArrowDown.Button.variant}
              withText={theme.HeroSection[layoutVariant!].StyledArrowDown.Button.withText}
              withIcon={theme.HeroSection[layoutVariant!].StyledArrowDown.Button.withIcon}
              iconName={theme.HeroSection[layoutVariant!].StyledArrowDown.Button.iconName}
              onClick={handleScrollDown}
            />
          </StyledArrowDown>
        )} */}
      </StyledSection>

      {/* This is required to jump to next section from hero */}
      {isArrowVisible && <div ref={sectionRef} />}
    </>
  );
};

export default HeroSection;
