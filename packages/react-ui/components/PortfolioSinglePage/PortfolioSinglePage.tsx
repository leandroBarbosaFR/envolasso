import React from 'react';
import { PortableText } from '@portabletext/react';
import { PortfolioSinglePageTheme } from '@agency-platform/themes';
import { Cta, Category, Media } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import CustomPortableText from '../../utils/portableText';
import ButtonLink from '../ButtonLink';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledArticleWrap from './components/StyledArticleWrap';
import StyledCtaWrap from './components/StyledCtaWrap';
import StyledContainer from './components/StyledContainer';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledExcerptWrap from './components/StyledExcerptWrap';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
// Props
export interface PortfolioSinglePageProps {
  layoutVariant: keyof PortfolioSinglePageTheme;
  title: string;
  subtitle: string;
  excerpt: any;
  body: any;
  category: Category;
  cta: Cta[];
}

const PortfolioSinglePage = ({
  layoutVariant,
  subtitle,
  title,
  excerpt,
  body,
  category,
  cta
}: PortfolioSinglePageProps) => {
  const theme = useTheme();

  const isCategoryVisible = theme.PortfolioSinglePage[layoutVariant!].config.isCategoryVisible;
  const isSubtitleVisible = theme.PortfolioSinglePage[layoutVariant!].config.isSubtitleVisible;
  const isTitleVisible = theme.PortfolioSinglePage[layoutVariant!].config.isTitleVisible;
  const isExcerptVisible = theme.PortfolioSinglePage[layoutVariant!].config.isExcerptVisible;
  const isBodyVisible = theme.PortfolioSinglePage[layoutVariant!].config.isBodyVisible;
  const isCtaVisible = theme.PortfolioSinglePage[layoutVariant!].config.isCtaVisible;

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PortfolioSinglePage[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PortfolioSinglePage[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PortfolioSinglePage[layoutVariant!].StyledGrid.withColGapp}
        >
          {category.slug && isCategoryVisible && (
            <StyledCtaWrap layoutVariant={layoutVariant}>
              <ButtonLink
                href={`/${category.dynamicRoute}${category.slug?.current}`}
                variant={theme.PortfolioSinglePage[layoutVariant!].StyledCtaWrap.Button.variant}
              >
                {category.title}
              </ButtonLink>
            </StyledCtaWrap>
          )}
          {subtitle && isSubtitleVisible && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.PortfolioSinglePage[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                {subtitle}
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && isTitleVisible && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h2'}
                variant={theme.PortfolioSinglePage[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {excerpt && isExcerptVisible && (
            <StyledExcerptWrap layoutVariant={layoutVariant}>
              <StyledExcerpt
                layoutVariant={layoutVariant}
                variant={theme.PortfolioSinglePage[layoutVariant!].StyledExcerptWrap.StyledExcerpt.variant}
              >
                <p>{excerpt}</p>
              </StyledExcerpt>
            </StyledExcerptWrap>
          )}
          {body && isBodyVisible && (
            <StyledArticleWrap layoutVariant={layoutVariant}>
              <StyledArticle
                layoutVariant={layoutVariant}
                variant={theme.PortfolioSinglePage[layoutVariant!].StyledArticleWrap.StyledArticle.variant}
              >
                <PortableText value={body} components={CustomPortableText} />
              </StyledArticle>
            </StyledArticleWrap>
          )}
          {cta && isCtaVisible && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                variant={theme.PortfolioSinglePage[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
                layoutVariant={layoutVariant}
                // data={cta}
                // ctaTitle={theme.PortfolioSinglePage[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.ctaTitle}
              />
            </StyledCtaNavWrap>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default PortfolioSinglePage;
