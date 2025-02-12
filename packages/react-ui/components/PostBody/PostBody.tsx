import React from 'react';
import { PostBodyTheme } from '@agency-platform/themes';
import { Cta, DialogBox, Category } from '@agency-platform/shared-types';
import { PortableText } from '@portabletext/react';
// Theme
import { useTheme } from 'styled-components';
// Hooks
import useDialogBox from '../../hooks/useDialogBox';
// Components
import CustomPortableText from '../../utils/portableText';
import ButtonLink from '../ButtonLink';
import Button from '../Button';
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
import StyledIconNav from './components/StyledIconNav';
// Props
export interface PostBodyProps {
  layoutVariant: keyof PostBodyTheme;
  title: string;
  subtitle: string;
  excerpt: any;
  body: any;
  category: Category;
  cta: Cta[];
}

const PostBody = ({ layoutVariant, subtitle, title, excerpt, body, category, cta }: PostBodyProps) => {
  const theme = useTheme();
  const shareBlog = useDialogBox() as DialogBox;
  const isCategoryVisible = theme.PostBody[layoutVariant!].config.isCategoryVisible;
  const isSubtitleVisible = theme.PostBody[layoutVariant!].config.isSubtitleVisible;
  const isTitleVisible = theme.PostBody[layoutVariant!].config.isTitleVisible;
  const isBodyVisible = theme.PostBody[layoutVariant!].config.isBodyVisible;
  const isExcerptVisible = theme.PostBody[layoutVariant!].config.isExcerptVisible;
  const isCtaVisible = theme.PostBody[layoutVariant!].config.isCtaVisible;

  const handleOpenShare = () => {
    return shareBlog.open('1');
  };

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PostBody[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PostBody[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PostBody[layoutVariant!].StyledGrid.withColGapp}
        >
          <StyledIconNav layoutVariant={layoutVariant}>
            <Button
              variant={theme.PostBody[layoutVariant!].StyledIconNav.button.variant}
              withIcon={theme.PostBody[layoutVariant!].StyledIconNav.button.withIcon}
              withText={theme.PostBody[layoutVariant!].StyledIconNav.button.withText}
              iconName={theme.PostBody[layoutVariant!].StyledIconNav.button.iconName}
              onClick={handleOpenShare}
            />
          </StyledIconNav>
          {category.slug && isCategoryVisible && (
            <StyledCatWrap layoutVariant={layoutVariant}>
              <ButtonLink
                href={`/${category.dynamicRoute}${category.slug?.current}`}
                variant={theme.PostBody[layoutVariant!].StyledCatWrap.Button.variant}
              >
                {category.title}
              </ButtonLink>
            </StyledCatWrap>
          )}
          {subtitle && isSubtitleVisible && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.PostBody[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
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
                variant={theme.PostBody[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {isExcerptVisible && excerpt && (
            <StyledExcerpt
              layoutVariant={layoutVariant}
              variant={theme.PostBody[layoutVariant!].StyledExcerpt.variant}
            >
              <p>{excerpt}</p>
            </StyledExcerpt>
          )}
          {body && isBodyVisible && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.PostBody[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          {cta && isCtaVisible && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                variant={theme.PostBody[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
                layoutVariant={layoutVariant}
                data={cta}
                ctaTitle={theme.PostBody[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.ctaTitle}
              />
            </StyledCtaNavWrap>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default PostBody;
