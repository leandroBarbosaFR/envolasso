import React from 'react';
import { PortfolioBodyTheme } from '@agency-platform/themes';
import type { Cta, Category } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
// Theme
import { useTheme } from 'styled-components';
// Components
import CustomPortableText from '../../utils/portableText';
import ButtonLink from '../ButtonLink';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledExcerpt from './components/StyledExcerpt';
import StyledCatWrap from './components/StyledCatWrap';
import StyledContainer from './components/StyledContainer';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
//Props
export interface PortfolioBodyProps {
  layoutVariant: keyof PortfolioBodyTheme;
  subtitle: string;
  excerpt: any;
  title: string;
  body: any;
  category: Category;
  cta: Cta[];
}
const PortfolioBody = ({
  layoutVariant,
  subtitle,
  title,
  excerpt,
  body,
  cta,
  category
}: PortfolioBodyProps) => {
  const theme = useTheme();
  const isHeadingVisible = theme.PortfolioBody[layoutVariant!].config.isHeadingVisible;
  const isSubtitleVisible = theme.PortfolioBody[layoutVariant!].config.isSubtitleVisible;
  const isExcerptVisible = theme.PortfolioBody[layoutVariant!].config.isExcerptVisible;
  const isCtaVisible = theme.PortfolioBody[layoutVariant!].config.isCtaVisible;
  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PortfolioBody[layoutVariant].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PortfolioBody[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PortfolioBody[layoutVariant!].StyledGrid.withColGapp}
        >
          {isCtaVisible && category.slug && (
            <StyledCatWrap layoutVariant={layoutVariant}>
              <ButtonLink
                href={`/${category.dynamicRoute}${category.slug?.current}`}
                variant={theme.PortfolioBody[layoutVariant!].StyledCatWrap.Button.variant}
              >
                {category.title}
              </ButtonLink>
            </StyledCatWrap>
          )}
          {isSubtitleVisible && subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.PortfolioBody[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                {subtitle}
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {isHeadingVisible && title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h2'}
                variant={theme.PortfolioBody[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {isExcerptVisible && excerpt && (
            <StyledExcerpt
              layoutVariant={layoutVariant}
              variant={theme.PortfolioBody[layoutVariant!].StyledExcerpt.variant}
            >
              <p>{excerpt}</p>
            </StyledExcerpt>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.PortfolioBody[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                variant={theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
                layoutVariant={layoutVariant}
                data={cta}
                ctaTitle={theme.PortfolioBody[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.ctaTitle}
              />
            </StyledCtaNavWrap>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default PortfolioBody;
