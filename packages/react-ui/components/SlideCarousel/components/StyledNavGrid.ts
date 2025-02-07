import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGrid from '../../Grid/components/StyledGrid';

const StyledNavGrid = styled(StyledGrid)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.display};
  align-items: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.alignItems};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.gridTemplateColumns};
  z-index: ${({ layoutVariant, theme }) => theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.mobile.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.mobileLarge.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.tablet.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.desktop.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.widescreen.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavArrows.StyledNavGrid.widescreen.padding};
  }
`;

export default StyledNavGrid;
