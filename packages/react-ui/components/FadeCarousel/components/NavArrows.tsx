import { CarouselTheme } from '@agency-platform/themes';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
// Components
import Button from '../../Button';
// Styles
import StyledNav from './StyledNav';
import StyledNavContainer from './StyledNavContainer';
import StyledNavGrid from './StyledNavGrid';
import StyledNavWrap from './StyledNavWrap';

interface NavArrowsProps {
  layoutVariant: keyof CarouselTheme;
  slideToPrevItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
  slideToNextItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleAutoSlide: (val: boolean) => void;
}

const NavArrows = ({ layoutVariant, slideToPrevItem, slideToNextItem, handleAutoSlide }: NavArrowsProps) => {
  const theme = useTheme();
  return (
    <StyledNav layoutVariant={layoutVariant}>
      <StyledNavContainer
        isFluid={theme.Carousel[layoutVariant!].NavArrows.StyledNavContainer.isFluid}
        layoutVariant={layoutVariant}
      >
        <StyledNavGrid withRowGap={false} withColGapp={false} layoutVariant={layoutVariant}>
          <StyledNavWrap layoutVariant={layoutVariant}>
            <Button
              variant={theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.arrowLeftButton.variant}
              withIcon={theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.arrowLeftButton.withIcon}
              withText={theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.arrowLeftButton.withText}
              iconName={theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.arrowLeftButton.iconName}
              onClick={(e) => {
                slideToPrevItem(e);
                handleAutoSlide(false);
              }}
            />
            <Button
              variant={theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.arrowRightButton.variant}
              withIcon={theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.arrowRightButton.withIcon}
              withText={theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.arrowRightButton.withText}
              iconName={theme.Carousel[layoutVariant!].NavArrows.StyledNavWrap.arrowRightButton.iconName}
              onClick={(e) => {
                slideToNextItem(e);
                handleAutoSlide(false);
              }}
            />
          </StyledNavWrap>
        </StyledNavGrid>
      </StyledNavContainer>
    </StyledNav>
  );
};

export default NavArrows;
