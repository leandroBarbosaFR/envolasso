import { useRouter } from 'next/router';
import { PageHeaderMediaTheme } from '@agency-platform/themes';
import { Media, EmbedServices, DialogBox, Cta, Category } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
import CustomPortableText from '../../utils/portableText';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
// Hooks
import useDialogBox from '../../hooks/useDialogBox';
// Components
import Button from '../Button';
import ButtonLink from '../ButtonLink';
import ColoredText from '../ColoredText';
import CtaNav from '../CtaNav';
import Embed from '../Embed';
import { ImageTag } from '../ImageTag';
// Components Styles
import StyledArticle from './components/StyledArticle';
import StyledBackButton from './components/StyledBackButton';
import StyledCatWrap from './components/StyledCatWrap';
import StyledContainer from './components/StyledContainer';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledIconNav from './components/StyledIconNav';
import StyledImage from './components/StyledImage';
import StyledMediaWrapper from './components/StyledMediaWrapper';
import StyledPageHeader from './components/StyledPageHeader';
import StyledPageHeaderGrid from './components/StyledPageHeaderGrid';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';

// Props
export interface PageHeaderMediaProps {
  layoutVariant: keyof PageHeaderMediaTheme;
  postMedoiaVariant: string;
  heroImage: Media;
  embedServices: EmbedServices;
  withShare: boolean;
  backLink?: string;
  title?: string;
  subtitle?: string;
  body?: any;
  excerpt?: string;
  ctaTitle?: string;
  cta?: Cta[];
  category?: Category;
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgTopAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const PageHeaderMedia = ({
  layoutVariant,
  postMedoiaVariant,
  heroImage,
  backLink,
  title,
  subtitle,
  excerpt,
  body,
  ctaTitle,
  cta,
  category,
  embedServices,
  withShare,
  SectionBgTopAsset,
  SectionBgBottomAsset,
  ContainerBgTopAsset,
  ContainerBgBottomAsset
}: PageHeaderMediaProps) => {
  const theme = useTheme();
  const router = useRouter();
  const shareBlog = useDialogBox() as DialogBox;
  const imageSrc = heroImage?.asset?.url;
  const blurDataURL = heroImage?.asset?.metadata?.lqip;
  const fallbackImgSrc = `${process.env.NEXT_PUBLIC_SITE_URL}/fallbackImg.svg`;

  const isBackButtonVisible = theme.PageHeaderMedia[layoutVariant!].config.isBackButtonVisible;
  const isBackButtonLink = theme.PageHeaderMedia[layoutVariant!].config.isBackButtonLink;
  const isCategoryVisible = theme.PageHeaderMedia[layoutVariant!].config.isCategoryVisible;
  const isSubtitleVisible = theme.PageHeaderMedia[layoutVariant!].config.isSubtitleVisible;
  const isTitleVisible = theme.PageHeaderMedia[layoutVariant!].config.isTitleVisible;
  const isExcerptVisible = theme.PageHeaderMedia[layoutVariant!].config.isExcerptVisible;
  const isBodyVisible = theme.PageHeaderMedia[layoutVariant!].config.isBodyVisible;
  const isCtaVisible = theme.PageHeaderMedia[layoutVariant!].config.isCtaVisible;

  const handleOpenShare = () => {
    return shareBlog.open('1');
  };

  const renderMedia = () => {
    switch (postMedoiaVariant) {
      case 'image':
        return (
          <StyledImage layoutVariant={layoutVariant}>
            <ImageTag
              layoutVariant={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.layoutVariant}
              src={imageSrc}
              fallbackImgSrc={fallbackImgSrc}
              blurDataURL={blurDataURL}
              alt={heroImage?.alt}
              caption={heroImage?.caption}
              width={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.width}
              height={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.height}
              cropWidth={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.cropWidth}
              cropHeight={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.cropHeight}
              fit={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.fit}
              fill={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.fill}
              priority={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.priority}
              // placeholder={theme.PageHeaderMedia[layoutVariant!].StyledImage.ImageTag.placeholder}
            />
          </StyledImage>
        );
      case 'video':
        return (
          <StyledMediaWrapper layoutVariant={layoutVariant}>
            <Embed layoutVariant={'default'} embedServices={embedServices} />
          </StyledMediaWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <StyledPageHeader layoutVariant={layoutVariant}>
      {SectionBgTopAsset && SectionBgTopAsset}
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PageHeaderMedia[layoutVariant!].StyledContainer.isFluid}
      >
        {ContainerBgTopAsset && ContainerBgTopAsset}
        {renderMedia()}
        {withShare && (
          <StyledPageHeaderGrid
            layoutVariant={layoutVariant}
            withRowGap={theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.withRowGap}
            withColGapp={theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.withColGapp}
          >
            {isBackButtonVisible && (
              <StyledBackButton layoutVariant={layoutVariant}>
                {isBackButtonLink && backLink ? (
                  <ButtonLink
                    href={backLink}
                    variant={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .variant
                    }
                    withIcon={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .withIcon
                    }
                    withText={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .withText
                    }
                    iconName={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .iconName
                    }
                    iconPosition={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .iconPosition
                    }
                  >
                    Back
                  </ButtonLink>
                ) : (
                  <Button
                    variant={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .variant
                    }
                    withIcon={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .withIcon
                    }
                    withText={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .withText
                    }
                    iconName={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .iconName
                    }
                    iconPosition={
                      theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledBackButton.Button
                        .iconPosition
                    }
                    onClick={() => router.back()}
                  >
                    Back
                  </Button>
                )}
              </StyledBackButton>
            )}
            {category && isCategoryVisible && (
              <StyledCatWrap layoutVariant={layoutVariant}>
                <ButtonLink
                  href={`/${category.dynamicRoute}${category.slug?.current}`}
                  variant={theme.PageHeaderMedia[layoutVariant!].StyledCatWrap.Button.variant}
                >
                  {category.title}
                </ButtonLink>
              </StyledCatWrap>
            )}
            {subtitle && isSubtitleVisible && (
              <StyledSubTitleWrap layoutVariant={layoutVariant}>
                <StyledSubTitle
                  layoutVariant={layoutVariant}
                  as={'h3'}
                  variant={theme.PageHeaderMedia[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
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
                  variant={theme.PageHeaderMedia[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
                >
                  <ColoredText text={title} />
                </StyledHeading>
              </StyledHeadingWrap>
            )}
            {isExcerptVisible && excerpt && (
              <StyledExcerpt
                layoutVariant={layoutVariant}
                variant={theme.PageHeaderMedia[layoutVariant!].StyledExcerpt.variant}
              >
                <p>{excerpt}</p>
              </StyledExcerpt>
            )}
            {body && isBodyVisible && (
              <StyledArticle
                layoutVariant={layoutVariant}
                variant={theme.PageHeaderMedia[layoutVariant!].StyledArticle.variant}
              >
                <PortableText value={body} components={CustomPortableText} />
              </StyledArticle>
            )}
            {cta && isCtaVisible && (
              <StyledCtaNavWrap layoutVariant={layoutVariant}>
                <CtaNav
                  variant={theme.PageHeaderMedia[layoutVariant!].StyledCtaNavWrap.CtaNav.variant}
                  ctaTitle={ctaTitle}
                  data={cta}
                />
              </StyledCtaNavWrap>
            )}

            <StyledIconNav layoutVariant={layoutVariant}>
              <Button
                variant={
                  theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                    .variant
                }
                withIcon={
                  theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                    .withIcon
                }
                withText={
                  theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                    .withText
                }
                iconName={
                  theme.PageHeaderMedia[layoutVariant!].StyledPageHeaderGrid.StyledIconNav.surpriseMeButton
                    .iconName
                }
                toolTipText={'Share'}
                onClick={handleOpenShare}
              />
            </StyledIconNav>
          </StyledPageHeaderGrid>
        )}
        {ContainerBgBottomAsset && ContainerBgBottomAsset}
      </StyledContainer>
      {SectionBgBottomAsset && SectionBgBottomAsset}
    </StyledPageHeader>
  );
};

export default PageHeaderMedia;
