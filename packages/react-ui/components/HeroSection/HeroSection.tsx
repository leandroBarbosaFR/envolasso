import { Cta, Media, Carousel } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Flip from 'gsap/dist/Flip';
import { Draggable } from 'gsap/dist/Draggable';

// Theme
import { useTheme } from 'styled-components';
import { HeroSectionTheme } from '@agency-platform/themes';
// Components
import Button from '../Button';
import CustomPortableText from '../../utils/portableText';
import TextSlider from '../TextSlider';
import FadeCarousel from '../FadeCarousel';
import { ImageTag } from '../ImageTag';
import SlideCarousel from '../SlideCarousel';
// Styles
import StyledArrowDown from './components/StyledArrowDown';
import StyledImage from './components/StyledImage';
import StyledMediaWrapper from './components/StyledMediaWrapper';
import StyledSection from './components/StyledSection';
import StyledVideo from './components/StyledVideo';
import StyledArticle from './components/StyledArticle';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledImageWrap from './components/StyledImageWrap';

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
  featureImage: Media;
  carouselType: 'homeCarousel' | 'homeContentCarousel' | 'artist';
}

const HeroSection = ({
  layoutVariant,
  title,
  standFirst,
  subtitle,
  heroType,
  isSlideTransition,
  heroFirstFrameImage,
  heroImage,
  heroStaticMedia,
  heroVideoUrl,
  carouselType,
  carouselData,
  featureImage
}: HeroSectionProps) => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const standFirstRef = useRef<HTMLParagraphElement | null>(null);
  const imageDragRef = useRef<HTMLDivElement | null>(null);

  const imageSrcFeatured = featureImage?.asset?.url;
  const blurDataURLFeatured = featureImage?.asset?.metadata?.lqip;
  const fallbackImgSrcFeatured = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;

  const isImage = heroStaticMedia === 'image';
  const imageSrc = heroImage?.asset?.url;
  const blurDataURL = heroImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;
  const heroFirstFrameImageSrc = heroFirstFrameImage?.asset?.url?.length
    ? heroFirstFrameImage?.asset?.url
    : fallbackImgSrc;
  const isArrowVisible = theme.HeroSection[layoutVariant!].StyledArrowDown.isArrowVisible;
  console.log(imageSrc);
  gsap.registerPlugin(Flip);
  gsap.registerPlugin(Draggable);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -70, scale: 0.8 }, // Starting properties (more negative y and scale down)
        {
          opacity: 1,
          y: 0,
          scale: 1, // Scale to normal
          duration: 5, // Increase duration for more visible effect
          delay: 1.8 // Optional delay for effect
        }
      );
    }
  }, [title]);

  useEffect(() => {
    let rotationTimeline: gsap.core.Timeline | undefined;

    if (imageDragRef.current) {
      // Initialize Draggable for manual rotation
      Draggable.create(imageDragRef.current, {
        type: 'rotation',
        inertia: true,
        onDragStart() {
          console.log('Rotation started');
          // Pause rotation timeline when user starts dragging
          if (rotationTimeline) rotationTimeline.pause();
        },
        onDragEnd() {
          console.log('Rotation ended');
          // Resume rotation timeline after dragging
          if (rotationTimeline) rotationTimeline.resume();
        }
      });

      // Set up the rotation timeline
      rotationTimeline = gsap.timeline({ repeat: -1 }); // Repeat indefinitely
      rotationTimeline
        .to(imageDragRef.current, {
          rotation: '+=90',
          duration: 2, // Duration of one full rotation
          ease: 'linear'
        })
        .to({}, { duration: 2 }); // Wait for 3 seconds (empty tween)
    }

    return () => {
      // Cleanup on unmount
      Draggable.get(imageDragRef.current)?.kill();
      if (rotationTimeline) rotationTimeline.kill();
    };
  }, []);

  //behind the wall slide
  useEffect(() => {
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { y: 200, opacity: 0 }, // Start off-screen to the left
        {
          y: 0,
          opacity: 1,
          duration: 3, // Adjust duration for smoothness
          ease: 'power3.out', // Smooth easing for a gradual slide
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [subtitle]);

  useEffect(() => {
    if (standFirstRef.current) {
      gsap.fromTo(
        standFirstRef.current,
        { opacity: 0, y: -70, scale: 0.8 }, // Starting properties (more negative y and scale down)
        {
          opacity: 1,
          y: 0,
          scale: 1, // Scale to normal
          duration: 3, // Increase duration for more visible effect
          delay: 1.8 // Optional delay for effect
        }
      );
    }
  }, [standFirst]);

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
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
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
            {imageSrcFeatured && (
              <StyledImageWrap
                layoutVariant={layoutVariant}
                ref={imageDragRef}
                style={{
                  cursor: 'grab'
                }}
              >
                <ImageTag
                  layoutVariant={'responsive'}
                  src={imageSrcFeatured}
                  fallbackImgSrc={fallbackImgSrcFeatured}
                  alt={'Name'}
                  fill={false}
                  priority={false}
                  width={800}
                  height={800}
                  blurDataURL={blurDataURLFeatured}
                />
              </StyledImageWrap>
            )}

            {subtitle && (
              <StyledSubTitleWrap layoutVariant={layoutVariant} style={{ overflow: 'hidden' }}>
                <StyledSubTitle
                  as={'h2'}
                  layoutVariant={layoutVariant}
                  variant={theme.HeroSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
                  ref={subtitleRef} // Attach the ref here
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
                  ref={headingRef} // Attach the ref here
                >
                  <TextSlider text={title} />
                </StyledHeading>
              </StyledHeadingWrap>
            )}
            {standFirst && (
              <StyledArticle
                layoutVariant={layoutVariant}
                variant={theme.HeroSection[layoutVariant!].StyledArticle.variant}
                ref={standFirstRef} // Attach the ref here
              >
                <PortableText value={standFirst} components={CustomPortableText} />
              </StyledArticle>
            )}
          </StyledGrid>
        </StyledContainer>

        {/* Button to jump to next section from hero */}
        {isArrowVisible && (
          <StyledArrowDown layoutVariant={layoutVariant}>
            <Button
              variant={theme.HeroSection[layoutVariant!].StyledArrowDown.Button.variant}
              withText={theme.HeroSection[layoutVariant!].StyledArrowDown.Button.withText}
              withIcon={theme.HeroSection[layoutVariant!].StyledArrowDown.Button.withIcon}
              iconName={theme.HeroSection[layoutVariant!].StyledArrowDown.Button.iconName}
              onClick={handleScrollDown}
            />
          </StyledArrowDown>
        )}
      </StyledSection>

      {/* This is required to jump to next section from hero */}
      {isArrowVisible && <div ref={sectionRef} />}
    </>
  );
};

export default HeroSection;
