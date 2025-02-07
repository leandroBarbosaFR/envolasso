import type { TextImgSectionTheme } from '@agency-platform/themes';
import type { TextColumn, Cta, Media } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
import React, { useRef } from 'react';
import CustomPortableText from '../../utils/portableText';
// Theme
import { useTheme } from 'styled-components';
// Component
import { ImageTag } from '../ImageTag';
import ColoredText from '../ColoredText';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledContainer from './components/StyledContainer';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledGrid from './components/StyledGrid';
import StyledGridNested from './components/StyledGridNested';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledImage from './components/StyledImage';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
// Styled Item
import StyledArticleItem from './components/StyledArticleItem';
import StyledCtaNavItem from './components/StyledCtaNavItem';
import StyledCtaNavWrapItem from './components/StyledCtaNavWrapItem';
import StyledGridItem from './components/StyledGridItem';
import StyledHeadingItem from './components/StyledHeadingItem';
import StyledHeadingWrapItem from './components/StyledHeadingWrapItem';
import StyledImageItem from './components/StyledImageItem';
import StyledSubTitleItem from './components/StyledSubTitleItem';
import StyledSubTitleWrapItem from './components/StyledSubTitleWrapItem';

// Props
export interface TextImgSectionProps {
  data: {
    layoutVariant: keyof TextImgSectionTheme;
    subtitle: string;
    title: string;
    isImageEnabled: boolean;
    body: any;
    isContentColumns: boolean;
    textColumn: TextColumn[];
    cta: Cta[];
    textImgSectionImage: Media;
    textImgSectionImageBg: Media;
  };
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgTopAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const TextImgSection = ({
  data,
  SectionBgTopAsset,
  SectionBgBottomAsset,
  ContainerBgTopAsset,
  ContainerBgBottomAsset
}: TextImgSectionProps) => {
  if (!data) return null;
  const sectionRef = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const {
    layoutVariant,
    subtitle,
    title,
    textImgSectionImage,
    body,
    cta,
    isImageEnabled,
    isContentColumns,
    textColumn,
    textImgSectionImageBg
  } = data;

  // Main image
  const imageSrc = textImgSectionImage?.asset?.url;
  const blurDataURL = textImgSectionImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = '/fallbackImg.svg';
  const isImageBlur = textImgSectionImage?.blur;

  // Background
  const imageBgSrc = textImgSectionImageBg?.asset?.url;
  const imageBgBlurDataURL = textImgSectionImageBg?.asset?.metadata?.lqip;
  const isImageBgBlur = textImgSectionImageBg?.blur;

  const renderTextColumn = () =>
    textColumn &&
    textColumn.map((item, index) => {
      const { subtitle, title, featureImage, body, cta, isImageEnabled } = item;
      const imageSrc = featureImage?.asset?.url;
      const blurDataURL = featureImage?.asset?.metadata?.lqip;
      const fallbackImgSrc =
        'https://cdn.sanity.io/images/c5gav4zw/production/0f0ac7822c9ddf163dc3974ea1b8fa816598b1be-800x600.png';
      const isImageBlur = featureImage?.blur;
      const isImageBgVisible = theme.TextImgSection[layoutVariant!].config.isImageBgVisible;

      return (
        <StyledGridItem
          layoutVariant={layoutVariant}
          withRowGap={theme.TextImgSection[layoutVariant!].StyledGridItem.withRowGap}
          withColGapp={theme.TextImgSection[layoutVariant!].StyledGridItem.withColGapp}
          key={index}
        >
          {isImageEnabled && (
            <StyledImageItem layoutVariant={layoutVariant} id="test">
              <ImageTag
                layoutVariant={theme.TextImgSection[layoutVariant!].StyledImageItem.ImageTag.layoutVariant}
                src={imageSrc}
                fallbackImgSrc={fallbackImgSrc}
                blurDataURL={blurDataURL}
                alt={featureImage?.alt}
                caption={featureImage?.caption}
                width={theme.TextImgSection[layoutVariant!].StyledImageItem.ImageTag.width}
                height={theme.TextImgSection[layoutVariant!].StyledImageItem.ImageTag.height}
                cropWidth={theme.TextImgSection[layoutVariant!].StyledImageItem.ImageTag.cropWidth}
                cropHeight={theme.TextImgSection[layoutVariant!].StyledImageItem.ImageTag.cropHeight}
                priority={false}
                fit={theme.TextImgSection[layoutVariant!].StyledImageItem.ImageTag.fit}
                fill={false}
                placeholder={isImageBlur ? 'blur' : 'empty'}
              />
            </StyledImageItem>
          )}
          {subtitle && (
            <StyledSubTitleWrapItem layoutVariant={layoutVariant}>
              <StyledSubTitleItem
                as={'h2'}
                layoutVariant={layoutVariant}
                variant={
                  theme.TextImgSection[layoutVariant!].StyledSubTitleWrapItem.StyledSubTitleItem.variant
                }
              >
                <ColoredText text={subtitle} />
              </StyledSubTitleItem>
            </StyledSubTitleWrapItem>
          )}
          {title && (
            <StyledHeadingWrapItem layoutVariant={layoutVariant}>
              <StyledHeadingItem
                as={'h1'}
                layoutVariant={layoutVariant}
                variant={theme.TextImgSection[layoutVariant!].StyledHeadingWrapItem.StyledHeadingItem.variant}
              >
                <ColoredText text={title} />
              </StyledHeadingItem>
            </StyledHeadingWrapItem>
          )}
          {body && (
            <StyledArticleItem
              layoutVariant={layoutVariant}
              variant={theme.TextImgSection[layoutVariant!].StyledArticleItem.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticleItem>
          )}
          {cta && (
            <StyledCtaNavWrapItem layoutVariant={layoutVariant}>
              <StyledCtaNavItem
                layoutVariant={layoutVariant}
                data={cta}
                variant={theme.TextImgSection[layoutVariant!].StyledCtaNavWrapItem.StyledCtaNavItem.variant}
                ctaTitle={undefined}
              />
            </StyledCtaNavWrapItem>
          )}
        </StyledGridItem>
      );
    });

  const isImageBgVisible = theme.TextImgSection[layoutVariant!].config.isImageBgVisible;
  return (
    <StyledSection layoutVariant={layoutVariant}>
      {SectionBgTopAsset && SectionBgTopAsset}
      {isImageBgVisible && textImgSectionImageBg && (
        <ImageTag
          layoutVariant={theme.TextImgSection[layoutVariant!].ImageBgTag.layoutVariant}
          src={imageBgSrc}
          fallbackImgSrc={fallbackImgSrc}
          blurDataURL={imageBgBlurDataURL}
          alt={textImgSectionImage?.alt}
          caption={textImgSectionImage?.caption}
          width={theme.TextImgSection[layoutVariant!].ImageBgTag.width}
          height={theme.TextImgSection[layoutVariant!].ImageBgTag.height}
          cropWidth={theme.TextImgSection[layoutVariant!].ImageBgTag.cropWidth}
          cropHeight={theme.TextImgSection[layoutVariant!].ImageBgTag.cropHeight}
          priority={false}
          fit={theme.TextImgSection[layoutVariant!].ImageBgTag.fit}
          fill={false}
          placeholder={isImageBgBlur ? 'blur' : 'empty'}
        />
      )}
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.TextImgSection[layoutVariant!].StyledContainer.isFluid}
      >
        {ContainerBgTopAsset && ContainerBgTopAsset}
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.TextImgSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.TextImgSection[layoutVariant!].StyledGrid.withColGapp}
        >
          {isImageEnabled && (
            <StyledImage layoutVariant={layoutVariant} ref={imageRef}>
              <ImageTag
                layoutVariant={theme.TextImgSection[layoutVariant!].StyledImage.ImageTag.layoutVariant}
                src={imageSrc}
                fallbackImgSrc={fallbackImgSrc}
                blurDataURL={blurDataURL}
                alt={textImgSectionImage?.alt}
                caption={textImgSectionImage?.caption}
                width={theme.TextImgSection[layoutVariant!].StyledImage.ImageTag.width}
                height={theme.TextImgSection[layoutVariant!].StyledImage.ImageTag.height}
                cropWidth={theme.TextImgSection[layoutVariant!].StyledImage.ImageTag.cropWidth}
                cropHeight={theme.TextImgSection[layoutVariant!].StyledImage.ImageTag.cropHeight}
                priority={false}
                fit={theme.TextImgSection[layoutVariant!].StyledImage.ImageTag.fit}
                fill={false}
                placeholder={isImageBlur ? 'blur' : 'empty'}
              />
            </StyledImage>
          )}
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h2'}
                layoutVariant={layoutVariant}
                variant={theme.TextImgSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                <ColoredText text={subtitle} />
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h1'}
                layoutVariant={layoutVariant}
                variant={theme.TextImgSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                <ColoredText text={title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.TextImgSection[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                layoutVariant={layoutVariant}
                data={cta}
                variant={theme.TextImgSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
              />
            </StyledCtaNavWrap>
          )}
          {isContentColumns && (
            <StyledGridNested
              layoutVariant={layoutVariant}
              as="div"
              withRowGap={theme.TextImgSection[layoutVariant!].StyledGridNested.withRowGap}
              withColGapp={theme.TextImgSection[layoutVariant!].StyledGridNested.withColGapp}
            >
              {renderTextColumn()}
            </StyledGridNested>
          )}
        </StyledGrid>
        {ContainerBgBottomAsset && ContainerBgBottomAsset}
      </StyledContainer>
      {SectionBgBottomAsset && SectionBgBottomAsset}
    </StyledSection>
  );
};

export default TextImgSection;
