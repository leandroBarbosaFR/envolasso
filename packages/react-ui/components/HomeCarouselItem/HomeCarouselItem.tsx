import { Carousel } from '@agency-platform/shared-types';
import React from 'react';
import { ImageTag } from '../ImageTag';
import StyledCarouselItem from './components/StyledCarouselItem';
import StyledMediaWrapper from './components/StyledMediaWrapper';
import StyledVideo from './components/StyledVideo';

interface HomeCarouselItemProps {
  layoutVariant: string;
  data: Carousel;
}

const HomeCarouselItem = ({ layoutVariant, data }: HomeCarouselItemProps) => {
  if (!data) return null;
  const { _type, featureImage, videoUrl, heroFirstFrameImage } = data;
  const imageSrc = featureImage?.asset?.url;
  const blurDataURL = featureImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;
  const heroFirstFrameImageSrc = heroFirstFrameImage?.asset?.url?.length
    ? heroFirstFrameImage?.asset?.url
    : fallbackImgSrc;
  return (
    <StyledCarouselItem layoutVariant={layoutVariant}>
      {_type === 'hero.image' ? (
        <ImageTag
          layoutVariant={'fullScreen'}
          src={imageSrc}
          fallbackImgSrc={fallbackImgSrc}
          blurDataURL={blurDataURL}
          alt={featureImage?.alt}
          caption={featureImage?.caption}
          fill={true}
          priority={false}
        />
      ) : (
        videoUrl && (
          <StyledMediaWrapper layoutVariant={layoutVariant} heroFirstFrameImage={heroFirstFrameImageSrc}>
            <StyledVideo
              layoutVariant={layoutVariant}
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
              title={'show reel video'}
            />
          </StyledMediaWrapper>
        )
      )}
    </StyledCarouselItem>
  );
};

export default HomeCarouselItem;
