import React from 'react';
import type { GoogleReviewSectionTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Components
import GoogleReview from '../GoogleReview';
import ColoredText from '../ColoredText';
import DefaultFeed from '../DefaultFeed';
import HorizontalFeed from '../HorizontalFeed';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledSection from './components/StyledSection';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledFeedWrap from './components/StyledFeedWrap';

export interface GoogleReviewSectionProps {
  data: {
    layoutVariant: keyof GoogleReviewSectionTheme;
    title: string;
    subtitle: string;
  };
}

const GoogleReviewSection = ({ data }: GoogleReviewSectionProps) => {
  const theme = useTheme();
  const { layoutVariant, title, subtitle } = data;

  // Tableau d'instances de GoogleReview

  const reviews = [<GoogleReview key={1} layoutVariant={layoutVariant} />];

  const renderFeed = () => {
    return (
      <HorizontalFeed
        type={'googleReviewSection'}
        layoutVariant={'default'}
        data={reviews}
        feedItemComponent={
          theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.feedItemComponent
        }
        withArrowButton={
          theme.GoogleReviewSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.withArrowButton
        }
      />
    );
  };

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.GoogleReviewSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.GoogleReviewSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.GoogleReviewSection[layoutVariant!].StyledGrid.withColGapp}
        >
          <StyledSubTitleWrap layoutVariant={layoutVariant}>
            <StyledSubTitle
              as={'h2'}
              layoutVariant={layoutVariant}
              variant={theme.GoogleReviewSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
            >
              <ColoredText text={subtitle} />
            </StyledSubTitle>
          </StyledSubTitleWrap>

          <StyledHeadingWrap layoutVariant={layoutVariant}>
            <StyledHeading
              as={'h1'}
              layoutVariant={layoutVariant}
              variant={theme.GoogleReviewSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
            >
              {title}
            </StyledHeading>
          </StyledHeadingWrap>
          <StyledFeedWrap layoutVariant={layoutVariant}>{renderFeed()}</StyledFeedWrap>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default GoogleReviewSection;
