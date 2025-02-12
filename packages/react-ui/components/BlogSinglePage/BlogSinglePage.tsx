import React from 'react';
import { PortableText } from '@portabletext/react';
import { BlogSinglePageTheme } from '@agency-platform/themes';
import { Cta, Category } from '@agency-platform/shared-types';
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
export interface BlogSinglePageProps {
  layoutVariant: keyof BlogSinglePageTheme;
  title: string;
  subtitle: string;
  excerpt: any;
  body: any;
  category: Category;
  cta: Cta[];
}

const BlogSinglePage = ({
  layoutVariant,
  subtitle,
  title,
  excerpt,
  body,
  category,
  cta
}: BlogSinglePageProps) => {
  const theme = useTheme();

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.BlogSinglePage[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.BlogSinglePage[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.BlogSinglePage[layoutVariant!].StyledGrid.withColGapp}
        >
          {/* {category.slug && (
            <StyledCtaWrap layoutVariant={layoutVariant}>
              <ButtonLink
                href={`/${category.dynamicRoute}${category.slug?.current}`}
                variant={
                  theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.Button
                    .variant
                }
              >
                {category.title}
              </ButtonLink>
            </StyledCtaWrap>
          )} */}
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.BlogSinglePage[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                {subtitle}
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h2'}
                variant={theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {excerpt && (
            <StyledExcerptWrap layoutVariant={layoutVariant}>
              <StyledExcerpt
                layoutVariant={layoutVariant}
                variant={theme.BlogSinglePage[layoutVariant!].StyledExcerptWrap.StyledExcerpt.variant}
              >
                <p>{excerpt}</p>
              </StyledExcerpt>
            </StyledExcerptWrap>
          )}
          {body && (
            <StyledArticleWrap layoutVariant={layoutVariant}>
              <StyledArticle
                layoutVariant={layoutVariant}
                variant={theme.BlogSinglePage[layoutVariant!].StyledArticleWrap.StyledArticle.variant}
              >
                <PortableText value={body} components={CustomPortableText} />
              </StyledArticle>
            </StyledArticleWrap>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                variant={theme.BlogSinglePage[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
                layoutVariant={layoutVariant}
                // data={cta}
                // ctaTitle={theme.BlogSinglePage[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.ctaTitle}
              />
            </StyledCtaNavWrap>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default BlogSinglePage;
