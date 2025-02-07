import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// Theme
import { useTheme } from 'styled-components';
// Styles
import StyledReviewWrapper from './components/StyledReviewWrapper';
import StyledReviewCard from './components/StyledReviewCard';
import StyledReviewCardWrapper from './components/StyledReviewCardWrapper';
import StyledArticle from './components/StyledArticle';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledExcerptWrap from './components/StyledExcerptWrap';
import StyledGrid from './components/StyledGrid';

interface PricingListProps {
  layoutVariant: string;
  subtitle?: string;
  quote?: any;
  _key?: string;
  pricings: {
    quote?: any;
    subtitle?: string;
    layoutVariant: string;
    credit: string;
    _key?: string;
  }[];
}

const PricingList: React.FC<PricingListProps> = ({ layoutVariant, pricings }) => {
  const theme = useTheme();

  return (
    <StyledReviewWrapper layoutVariant={layoutVariant}>
      {pricings.map((pricing, index) => (
        <StyledReviewCardWrapper key={pricing._key || index}>
          <StyledReviewCard layoutVariant={layoutVariant}>
            <StyledGrid
              layoutVariant={layoutVariant}
              withRowGap={theme.PricingList[layoutVariant!].StyledGrid.withRowGap}
              withColGapp={theme.PricingList[layoutVariant!].StyledGrid.withColGapp}
            >
              {/* Display subtitle, title, quote, etc. */}
              <StyledSubTitleWrap layoutVariant={layoutVariant}>
                <StyledSubTitle
                  as={'h2'}
                  layoutVariant={layoutVariant}
                  variant={theme.PricingList[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
                >
                  {pricing.subtitle}
                </StyledSubTitle>
              </StyledSubTitleWrap>

              <StyledHeadingWrap layoutVariant={layoutVariant}>
                <StyledHeading
                  as={'h1'}
                  layoutVariant={layoutVariant}
                  variant={theme.PricingList[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
                >
                  {pricing.credit}
                </StyledHeading>
              </StyledHeadingWrap>

              <StyledExcerptWrap layoutVariant={layoutVariant}>
                <StyledExcerpt
                  layoutVariant={layoutVariant}
                  variant={theme.PricingList[layoutVariant!].StyledExcerptWrap.StyledExcerpt.variant}
                >
                  {pricing.quote}
                </StyledExcerpt>
              </StyledExcerptWrap>
            </StyledGrid>
          </StyledReviewCard>
        </StyledReviewCardWrapper>
      ))}
    </StyledReviewWrapper>
  );
};

export default PricingList;
