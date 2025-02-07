import React from 'react';
import type { PageHeaderTheme } from '@agency-platform/themes';
import type { Cta, Media, Category } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
import { useTheme } from 'styled-components';
import CustomPortableText from '../../utils/portableText';
// Components
import CtaNav from '../CtaNav';
import { ImageTag } from '../ImageTag';
import ColoredText from '../ColoredText';
import ButtonLink from '../ButtonLink';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledContainer from './components/StyledContainer';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledImage from './components/StyledImage';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledCatWrap from './components/StyledCatWrap';

export interface PageHeaderProps {
  layoutVariant: keyof PageHeaderTheme;
  isFluid?: boolean;
  withImage: boolean;
  title?: string;
  subtitle?: string;
  body?: any;
  excerpt?: string;
  ctaTitle?: string;
  cta: Cta[];
  category?: Category;
  featureImage?: Media;
  sectionImageBg?: Media;
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgTopAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const PageHeader = ({
  layoutVariant,
  withImage,
  title,
  subtitle,
  body,
  excerpt,
  ctaTitle,
  cta,
  category,
  featureImage,
  sectionImageBg,
  SectionBgTopAsset,
  SectionBgBottomAsset,
  ContainerBgTopAsset,
  ContainerBgBottomAsset
}: PageHeaderProps) => {
  const theme = useTheme();
  const imageSrc = featureImage?.asset?.url;
  const blurDataURL = featureImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;
  const isImageBlur = featureImage?.blur;

  // Background
  const imageBgSrc = sectionImageBg?.asset?.url;
  const imageBgBlurDataURL = sectionImageBg?.asset?.metadata?.lqip;
  const isImageBgBlur = sectionImageBg?.blur;

  const isCategoryVisible = theme.PageHeader[layoutVariant!].config.isCategoryVisible;
  const isSectionImageBgVisible = theme.PageHeader[layoutVariant!].config.isSectionImageBgVisible;
  const isImageBgVisible = theme.PageHeader[layoutVariant!].config.isImageBgVisible;
  const isSubtitleVisible = theme.PageHeader[layoutVariant!].config.isSubtitleVisible;
  const isTitleVisible = theme.PageHeader[layoutVariant!].config.isTitleVisible;
  const isBodyVisible = theme.PageHeader[layoutVariant!].config.isBodyVisible;
  const isCtaVisible = theme.PageHeader[layoutVariant!].config.isCtaVisible;
  const isExcerptVisible = theme.PageHeader[layoutVariant!].config.isExcerptVisible;

  return (
    <StyledSection layoutVariant={layoutVariant}>
      {SectionBgTopAsset && SectionBgTopAsset}
      {sectionImageBg && isSectionImageBgVisible && (
        <ImageTag
          layoutVariant={theme.PageHeader[layoutVariant!].SectionImageBg.layoutVariant}
          src={imageBgSrc}
          fallbackImgSrc={fallbackImgSrc}
          blurDataURL={imageBgBlurDataURL}
          alt={sectionImageBg?.alt}
          caption={sectionImageBg?.caption}
          width={theme.PageHeader[layoutVariant!].SectionImageBg.width}
          height={theme.PageHeader[layoutVariant!].SectionImageBg.height}
          cropWidth={theme.PageHeader[layoutVariant!].SectionImageBg.cropWidth}
          cropHeight={theme.PageHeader[layoutVariant!].SectionImageBg.cropHeight}
          priority={false}
          fit={theme.PageHeader[layoutVariant!].SectionImageBg.fit}
          fill={false}
          placeholder={isImageBgBlur ? 'blur' : 'empty'}
        />
      )}
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PageHeader[layoutVariant!].StyledContainer.isFluid}
      >
        {ContainerBgTopAsset && ContainerBgTopAsset}
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PageHeader[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PageHeader[layoutVariant!].StyledGrid.withColGapp}
        >
          {category && isCategoryVisible && (
            <StyledCatWrap layoutVariant={layoutVariant}>
              <ButtonLink
                href={`/${category.dynamicRoute}${category.slug?.current}`}
                variant={theme.PageHeader[layoutVariant!].StyledCatWrap.Button.variant}
              >
                {category.title}
              </ButtonLink>
            </StyledCatWrap>
          )}
          {isImageBgVisible && withImage ? (
            <StyledImage layoutVariant={layoutVariant}>
              <ImageTag
                layoutVariant={theme.PageHeader[layoutVariant!].StyledImage.ImageTag.layoutVariant}
                src={imageSrc}
                fallbackImgSrc={fallbackImgSrc}
                blurDataURL={blurDataURL}
                alt={featureImage?.alt}
                caption={featureImage?.caption}
                width={theme.PageHeader[layoutVariant!].StyledImage.ImageTag.width}
                height={theme.PageHeader[layoutVariant!].StyledImage.ImageTag.height}
                cropWidth={theme.PageHeader[layoutVariant!].StyledImage.ImageTag.cropWidth}
                cropHeight={theme.PageHeader[layoutVariant!].StyledImage.ImageTag.cropHeight}
                fit={theme.PageHeader[layoutVariant!].StyledImage.ImageTag.fit}
                fill={false}
                priority={false}
                placeholder={isImageBlur ? 'blur' : 'empty'}
              />
            </StyledImage>
          ) : null}
          {subtitle && isSubtitleVisible && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                layoutVariant={layoutVariant}
                as={'h3'}
                variant={theme.PageHeader[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                <ColoredText text={subtitle} />
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && isTitleVisible && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h2'}
                variant={theme.PageHeader[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                <ColoredText text={title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && isBodyVisible && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.PageHeader[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          {excerpt && isExcerptVisible && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.PageHeader[layoutVariant!].StyledArticle.variant}
            >
              <p>{excerpt}</p>
            </StyledArticle>
          )}
          {cta && isCtaVisible && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <CtaNav
                variant={theme.PageHeader[layoutVariant!].StyledCtaNavWrap.CtaNav.variant}
                ctaTitle={ctaTitle}
                data={cta}
              />
            </StyledCtaNavWrap>
          )}
        </StyledGrid>
        {ContainerBgBottomAsset && ContainerBgBottomAsset}
      </StyledContainer>
      {SectionBgBottomAsset && SectionBgBottomAsset}
    </StyledSection>
  );
};

export default PageHeader;
