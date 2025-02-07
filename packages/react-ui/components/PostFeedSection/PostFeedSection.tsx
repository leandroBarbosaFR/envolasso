import type { PostFeedSectionTheme } from '@agency-platform/themes';
import type { Blog, Cta } from '@agency-platform/shared-types';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
// Components
import DefaultFeed from '../DefaultFeed';
import HorizontalFeed from '../HorizontalFeed';
import ColoredText from '../ColoredText';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
import StyledFeedWrap from './components/StyledFeedWrap';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';

export interface PostFeedSectionProps {
  data: {
    layoutVariant: keyof PostFeedSectionTheme;
    subtitle: string;
    title: string;
    feedStyle: string;
    cta: Cta[];
    posts: Blog[];
  };
}

const PostFeedSection = ({ data }: PostFeedSectionProps) => {
  if (!data?.posts) return null;
  const { layoutVariant, feedStyle, subtitle, title, cta, posts } = data;
  const theme = useTheme();

  const renderFeed = () => {
    switch (feedStyle) {
      case 'grid':
        return (
          <DefaultFeed
            type={'postFeed'}
            layoutVariant={'default'}
            data={posts}
            feedItemComponent={
              theme.PostFeedSection[layoutVariant!].StyledFeedWrap.DefaultFeed.feedItemComponent
            }
          />
        );
      case 'carousel':
        return (
          <HorizontalFeed
            type={'postFeed'}
            layoutVariant={theme.PostFeedSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.layoutVariant}
            data={posts}
            withArrowButton={
              theme.PostFeedSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.withArrowButton
            }
            feedItemComponent={
              theme.PostFeedSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.feedItemComponent
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PostFeedSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PostFeedSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PostFeedSection[layoutVariant!].StyledGrid.withColGapp}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.PostFeedSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                <ColoredText text={subtitle} />
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h2'}
                variant={theme.PostFeedSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                <ColoredText text={title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                variant={theme.PostFeedSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
                layoutVariant={layoutVariant}
                data={cta}
              />
            </StyledCtaNavWrap>
          )}
          <StyledFeedWrap layoutVariant={layoutVariant}>{renderFeed()}</StyledFeedWrap>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default PostFeedSection;
