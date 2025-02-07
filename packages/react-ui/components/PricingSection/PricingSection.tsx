import React from 'react';
import type { PricingSectionTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Components
import PricingList from '../PricingList';
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

export interface PricingSectionProps {
  data: {
    layoutVariant: keyof PricingSectionTheme;
    title: string;
    subtitle: string;
    credit: string;
    quote?: any; // Make it optional with "?"
    pricings: {
      layoutVariant: string;
      subtitle: string;
      credit: string;
      quote?: any; // Optional
    }[]; // Change here to use a regular array
  };
}

const PricingSection = ({ data }: PricingSectionProps) => {
  const theme = useTheme();

  const { layoutVariant, subtitle, title, pricings } = data;

  const renderFeed = () => {
    return (
      <HorizontalFeed
        type={'pricingSection'}
        layoutVariant={'default'}
        data={pricings}
        withArrowButton={theme.PricingSection[layoutVariant!].StyledFeedWrap.HorizontalFeed.withArrowButton}
      />
    );
  };

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PricingSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.PricingSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PricingSection[layoutVariant!].StyledGrid.withColGapp}
        >
          <StyledSubTitleWrap layoutVariant={layoutVariant}>
            <StyledSubTitle
              as={'h2'}
              layoutVariant={layoutVariant}
              variant={theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
            >
              <ColoredText text={subtitle} />
            </StyledSubTitle>
          </StyledSubTitleWrap>

          <StyledHeadingWrap layoutVariant={layoutVariant}>
            <StyledHeading
              as={'h1'}
              layoutVariant={layoutVariant}
              variant={theme.PricingSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
            >
              {title}
            </StyledHeading>
          </StyledHeadingWrap>
          <StyledFeedWrap layoutVariant={layoutVariant}>
            <PricingList layoutVariant={layoutVariant} pricings={pricings} />
            {renderFeed()}
          </StyledFeedWrap>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default PricingSection;
