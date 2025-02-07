import React from 'react';
import { CarouselTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Components

// Styles
import StyledNavThumbs from './StyledNavThumbs';
import StyledNavThumbsContainer from './StyledNavThumbsContainer';
import StyledNavThumbsGrid from './StyledNavThumbsGrid';
import StyledNavThumbsWrap from './StyledNavThumbsWrap';

interface NavThumbsProps {
  layoutVariant: keyof CarouselTheme;
  thumbsFragment: React.ReactNode;
}

const NavThumbs = ({ thumbsFragment, layoutVariant }: NavThumbsProps) => {
  const theme = useTheme();
  return (
    <StyledNavThumbs layoutVariant={layoutVariant}>
      <StyledNavThumbsContainer
        isFluid={theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsContainer.isFluid}
        layoutVariant={layoutVariant}
      >
        <StyledNavThumbsGrid
          withRowGap={theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.withRowGap}
          withColGapp={theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.withColGapp}
          layoutVariant={layoutVariant}
        >
          <StyledNavThumbsWrap layoutVariant={layoutVariant}>
            <div>{thumbsFragment}</div>
          </StyledNavThumbsWrap>
        </StyledNavThumbsGrid>
      </StyledNavThumbsContainer>
    </StyledNavThumbs>
  );
};

export default NavThumbs;
