import React from 'react';
import Marquee from 'react-fast-marquee';
import type { LogoFeedSectionTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Components

// Styles
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledSection from './components/StyledSection';
import StyledMarqueeWrapper from './components/StyledMarqueeWrapper';

// Hooks
import useWindowDimensions from '../../hooks/useWindowDimensions';

export interface LogoFeedSectionProps {
  data: {
    layoutVariant: keyof LogoFeedSectionTheme;
    title: string;
  };
}

const LogoFeedSection = ({ data }: LogoFeedSectionProps) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { layoutVariant, title } = data;
  const isMobile = width <= theme.breakpoints.mobileLarge;

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.LogoFeedSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.LogoFeedSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.LogoFeedSection[layoutVariant!].StyledGrid.withColGapp}
        >
          <StyledMarqueeWrapper>
            <Marquee
              pauseOnHover={true}
              gradientWidth={200}
              gradientColor={'rgba(9, 9, 11, 1)'}
              gradient={true}
            >
              <span>{title}</span>
            </Marquee>
          </StyledMarqueeWrapper>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default LogoFeedSection;
