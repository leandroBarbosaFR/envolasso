import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGrid from '../../Grid/components/StyledGrid';

const StyledNavThumbsGrid = styled(StyledGrid)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.display};
  align-items: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.alignItems};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.gridTemplateColumns};
  z-index: ${({ layoutVariant, theme }) =>
    theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.mobile.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.mobileLarge.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.tablet.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.desktop.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.widescreen.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.Carousel[layoutVariant!].NavThumbs.StyledNavThumbsGrid.widescreen.padding};
  }
`;

export default StyledNavThumbsGrid;
