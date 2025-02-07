import { ContentCarousel } from '@agency-platform/shared-types';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';

// Components
import SlideCarousel from '../SlideCarousel';

// Styles
import StyledSection from './components/StyledSection';

// Props
export interface HeroSectionContentCarouselProps {
  carouselType: 'homeCarousel' | 'homeContentCarousel' | 'artist';
  data: ContentCarousel[];
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const HeroSectionContentCarousel = ({ carouselType, data }: HeroSectionContentCarouselProps) => {
  if (data?.length === 0) return null;
  const theme = useTheme();
  const layoutVariant = 'default';

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <SlideCarousel
        layoutVariant={theme.HeroSectionContentCarousel[layoutVariant!].SlideCarousel.layoutVariant}
        carouselType={carouselType}
        data={data}
        withLoop={theme.HeroSectionContentCarousel[layoutVariant!].SlideCarousel.withLoop}
        withArrowButton={theme.HeroSectionContentCarousel[layoutVariant!].SlideCarousel.withArrowButton}
        withThumbnails={theme.HeroSectionContentCarousel[layoutVariant!].SlideCarousel.withThumbnails}
        autoSlide={theme.HeroSectionContentCarousel[layoutVariant!].SlideCarousel.autoSlide}
      />
    </StyledSection>
  );
};

export default HeroSectionContentCarousel;
