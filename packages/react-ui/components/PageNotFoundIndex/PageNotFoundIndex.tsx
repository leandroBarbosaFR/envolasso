import React from 'react';
import { PortableTextBlock } from '@portabletext/types';
import { Cta } from '@agency-platform/shared-types';
import { CustomPortableText } from '../../utils';
import { PortableText } from '@portabletext/react';
// Theme
import { useTheme } from 'styled-components';
import { PageNotFoundIndexTheme } from '@agency-platform/themes';
// Components
import { ImageTag } from '../ImageTag';
import ColoredText from '../ColoredText';
import CtaNav from '../CtaNav';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledImage from './components/StyledImage';
import StyledSection from './components/StyledSection';
import StyledBodycopy from './components/StyledBodycopy';
import StyledBodycopyWrap from './components/StyledBodycopyWrap';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledArticleAside from './components/StyledArticleAside';
import StyledSocialNavWrap from './components/StyledSocialNavWrap';
import StyledArticle from './components/StyledArticle';
import StyledArticleWrap from './components/StyledArticleWrap';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';

// Props
export interface PageNotFoundIndexProps {
  layoutVariant: keyof PageNotFoundIndexTheme;
  imageUrl?: string;
  pageNotFound404: {
    _type: string;
    subtitle?: string;
    title?: string;
    body?: PortableTextBlock;
    ctaTitle?: string;
    cta?: Cta[];
    address?: PortableTextBlock;
    sociallinks?: Cta[];
    imageSource?: {
      alt: string | null;
      asset: {
        url: string;
        width: string;
        height: string;
      };
    };
  };
}

const PageNotFoundIndex = ({ layoutVariant, pageNotFound404 }: PageNotFoundIndexProps) => {
  const theme = useTheme();
  const fallbackImgSrc = '/fallbackImg.svg';
  const { title, body, imageSource, cta, ctaTitle, address, sociallinks, subtitle } = pageNotFound404;
  const imageUrl = imageSource?.asset?.url;

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PageNotFoundIndex[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PageNotFoundIndex[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PageNotFoundIndex[layoutVariant!].StyledGrid.withColGapp}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h5'}
                layoutVariant={layoutVariant}
                variant={theme.PageNotFoundIndex[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                <ColoredText text={subtitle} />
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {/* <StyledArticle
            layoutVariant={layoutVariant}
            variant={theme.PageNotFoundIndex[layoutVariant!].StyledArticle.variant}
          > */}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h1'}
                variant={theme.PageNotFoundIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                <ColoredText text={title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledBodycopyWrap layoutVariant={layoutVariant}>
              <StyledBodycopy
                variant={theme.PageNotFoundIndex[layoutVariant!].StyledBodycopyWrap.StyledBodycopy.variant}
                layoutVariant={layoutVariant}
              >
                <PortableText value={body} components={CustomPortableText} />
              </StyledBodycopy>
            </StyledBodycopyWrap>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <CtaNav
                variant={theme.PageNotFoundIndex[layoutVariant!].StyledCtaNavWrap.CtaNav.variant}
                ctaTitle={ctaTitle}
                data={cta}
              />
            </StyledCtaNavWrap>
          )}

          {imageUrl && (
            <StyledImage layoutVariant={layoutVariant}>
              <ImageTag
                layoutVariant={'responsive'}
                src={imageUrl ? imageUrl : fallbackImgSrc}
                alt="image name"
                height={900}
                width={900}
                fill={false}
                priority={false}
              />
            </StyledImage>
          )}
          {/* </StyledArticle> */}

          <StyledArticleWrap layoutVariant={layoutVariant}>
            {address && (
              <StyledArticleAside
                layoutVariant={layoutVariant}
                variant={theme.PageNotFoundIndex[layoutVariant!].StyledArticleAside.variant}
              >
                <PortableText value={address} components={CustomPortableText} />
              </StyledArticleAside>
            )}
            {sociallinks && (
              <StyledSocialNavWrap layoutVariant={layoutVariant}>
                <CtaNav
                  variant={theme.PageNotFoundIndex[layoutVariant!].StyledSocialNavWrap.CtaNav.variant}
                  ctaTitle={''}
                  data={sociallinks}
                  allowActiveButton={true}
                />
              </StyledSocialNavWrap>
            )}
          </StyledArticleWrap>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default PageNotFoundIndex;
