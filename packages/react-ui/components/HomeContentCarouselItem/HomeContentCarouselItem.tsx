import { ContentCarousel } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
import { HomeContentCarouselItemTheme } from '@agency-platform/themes';
// components
import CustomPortableText from '../../utils/portableText';
import { ImageTag } from '../ImageTag';
import ColoredText from '../ColoredText';
// Styles
import StyledCarouselItem from './components/StyledCarouselItem';
import StyledContainer from './components/StyledContainer';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledImage from './components/StyledImage';
import StyledSubTitle from './components/StyledSubTitle';
import StyledContentImage from './components/StyledContentImage';

interface HomeContentCarouselItemProps {
  layoutVariant: keyof HomeContentCarouselItemTheme;
  data: ContentCarousel;
}

const HomeContentCarouselItem = ({ layoutVariant, data }: HomeContentCarouselItemProps) => {
  if (!data) return null;
  const theme = useTheme();
  const { title, subtitle, standFirst, featureImage, cta } = data;
  const imageSrc = featureImage?.asset?.url;
  const blurDataURL = featureImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;

  return (
    <StyledCarouselItem layoutVariant={layoutVariant}>
      {featureImage?.isBackgroundImage && (
        <StyledImage layoutVariant={layoutVariant}>
          <ImageTag
            layoutVariant={theme.HomeContentCarouselItem[layoutVariant!].ImageTag.layoutVariant}
            src={imageSrc}
            fallbackImgSrc={fallbackImgSrc}
            blurDataURL={blurDataURL}
            alt={featureImage?.alt}
            caption={featureImage?.caption}
            fill={true}
            priority={false}
          />
        </StyledImage>
      )}
      <StyledContainer
        isFluid={theme.HomeContentCarouselItem[layoutVariant!].StyledContainer.isFluid}
        layoutVariant={layoutVariant}
      >
        <StyledGrid
          withRowGap={theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.HomeContentCarouselItem[layoutVariant!].StyledGrid.withColGapp}
          layoutVariant={layoutVariant}
        >
          {!featureImage?.isBackgroundImage && (
            <StyledContentImage layoutVariant={layoutVariant}>
              <ImageTag
                layoutVariant={
                  theme.HomeContentCarouselItem[layoutVariant!].StyledContentImage.ImageTag.layoutVariant
                }
                src={imageSrc}
                fallbackImgSrc={fallbackImgSrc}
                blurDataURL={blurDataURL}
                alt={featureImage?.alt}
                caption={featureImage?.caption}
                width={theme.HomeContentCarouselItem[layoutVariant!].StyledContentImage.ImageTag.width}
                height={theme.HomeContentCarouselItem[layoutVariant!].StyledContentImage.ImageTag.height}
                fill={false}
                priority={false}
                placeholder={
                  theme.HomeContentCarouselItem[layoutVariant!].StyledContentImage.ImageTag.placeholder
                }
              />
            </StyledContentImage>
          )}
          {subtitle && (
            <StyledSubTitle
              as={'h5'}
              variant={theme.HomeContentCarouselItem[layoutVariant!].StyledSubTitle.variant}
              layoutVariant={layoutVariant}
            >
              <ColoredText text={subtitle} />
            </StyledSubTitle>
          )}
          {title && (
            <StyledHeading
              variant={theme.HomeContentCarouselItem[layoutVariant!].StyledHeading.variant}
              layoutVariant={layoutVariant}
            >
              <ColoredText text={title} />
            </StyledHeading>
          )}
          {standFirst && (
            <StyledExcerpt
              variant={theme.HomeContentCarouselItem[layoutVariant!].StyledExcerpt.variant}
              layoutVariant={layoutVariant}
            >
              <PortableText value={standFirst} components={CustomPortableText} />
            </StyledExcerpt>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                variant={theme.HomeContentCarouselItem[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
                layoutVariant={layoutVariant}
                data={cta}
                ctaTitle={
                  theme.HomeContentCarouselItem[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.ctaTitle
                }
              />
            </StyledCtaNavWrap>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledCarouselItem>
  );
};

export default HomeContentCarouselItem;
