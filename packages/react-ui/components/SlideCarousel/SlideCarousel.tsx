import React, { useState, useEffect, useRef } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { CarouselTheme } from '@agency-platform/themes';
import { ContentCarousel, Portfolio, Blog } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import IndexPageHeader from '../IndexPageHeader';
import HomeCarouselItem from '../HomeCarouselItem';
import HomeContentCarouselItem from '../HomeContentCarouselItem';

// Styles
import NavArrows from './components/NavArrows';
import NavThumbs from './components/NavThumbs';
import StyledCarouselWrap from './components/StyledCarouselWrap';
import StyledThumbsItem from './components/StyledThumbsItem';

export interface SlideCarouselProps {
  layoutVariant: keyof CarouselTheme;
  feedItemComponent?: string;
  carouselType:
    | 'homeCarousel'
    | 'homeContentCarousel'
    | 'artist'
    | 'composer'
    | 'mentor'
    | 'portfolio'
    | 'post'
    | 'partnerships'
    | 'layoutContentCarousel'
    | 'albums'
    | 'collections'
    | 'playlists'
    | 'label';
  data: Portfolio[] | ContentCarousel[] | Blog[] | { id: string }[] | any[];
  artUrl?: string;
  iconOptions?: string[];
  menuOptions?:
    | {
        title: string;
        name: string;
      }[]
    | null;
  withLoop: boolean;
  withArrowButton: boolean;
  withThumbnails: boolean;
  autoSlide?: boolean;
}

const SlideCarousel = ({
  layoutVariant,
  feedItemComponent,
  carouselType,
  data = [],
  artUrl,
  iconOptions,
  menuOptions,
  withLoop,
  withArrowButton,
  withThumbnails,
  autoSlide = false
}: SlideCarouselProps) => {
  if (!data?.length) return null;
  const theme = useTheme();
  const slideToNextItemRef = useRef<any>(null);
  const [index, setIndex] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(false);

  const handleClick = (id: string) => {
    slideToItem(id);
  };

  const renderCarouselItem = (item: any, carouselType: string) => {
    switch (carouselType) {
      case 'homeCarousel':
        return <HomeCarouselItem layoutVariant={layoutVariant} data={item} />;
      case 'homeContentCarousel':
        return <HomeContentCarouselItem layoutVariant={layoutVariant} data={item} />;
      case 'indexPageHeader':
    }
  };

  const {
    carouselFragment,
    thumbsFragment,
    slideToNextItem,
    slideToPrevItem,
    slideToItem,
    useListenToCustomEvent
  } = useSpringCarousel({
    withLoop: withLoop,
    withThumbs: true,
    items: data?.map((item: any, i: number) => {
      const id = i.toString();
      const isActive = index === i;

      return {
        id,
        renderItem: renderCarouselItem(item, carouselType),
        renderThumb: withThumbnails && (
          <StyledThumbsItem
            key={i}
            isActive={isActive}
            onClick={() => {
              handleClick(id);
              return setIsAutoSlide(false);
            }}
            layoutVariant={layoutVariant}
          />
        )
      };
    })
  });

  useEffect(() => {
    setIsAutoSlide(true);
  }, [autoSlide]);

  // Assign the slideToNextItem function to the ref
  useEffect(() => {
    slideToNextItemRef.current = slideToNextItem;
  }, [slideToNextItem]);

  useEffect(() => {
    let autoSlideInterval: NodeJS.Timeout | null = null;
    if (isAutoSlide) {
      const slideDuration = theme.Carousel[layoutVariant!].SlideCarousel.duration; // Auto-slide every 5 seconds or duration defined in theme
      autoSlideInterval = setInterval(slideToNextItem, slideDuration);
    }
    return () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };
  }, [isAutoSlide]);

  useListenToCustomEvent((data) => {
    if (data.eventName === 'onDrag') {
      setIsAutoSlide(false);
    }
    if (data.eventName === 'onSlideStartChange') {
      setIndex(data.nextItem.index);
    }
  });

  return (
    <>
      {withArrowButton && (
        <NavArrows
          layoutVariant={layoutVariant}
          slideToPrevItem={slideToPrevItem}
          slideToNextItem={slideToNextItem}
          handleAutoSlide={setIsAutoSlide}
        />
      )}
      {withThumbnails && <NavThumbs thumbsFragment={thumbsFragment} layoutVariant={layoutVariant} />}
      <StyledCarouselWrap layoutVariant={layoutVariant}>{carouselFragment}</StyledCarouselWrap>
    </>
  );
};

export default SlideCarousel;
