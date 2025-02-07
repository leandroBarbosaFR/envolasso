import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledGrid = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.display};
  align-items: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.alignItems};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.CtaNavSection[layoutVariant!].StyledGrid.gridTemplateColumns};
  z-index: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.CtaNavSection[layoutVariant!].StyledGrid.mobile.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.CtaNavSection[layoutVariant!].StyledGrid.mobile.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.CtaNavSection[layoutVariant!].StyledGrid.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.CtaNavSection[layoutVariant!].StyledGrid.mobileLarge.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledGrid.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledGrid.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.CtaNavSection[layoutVariant!].StyledGrid.tablet.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.CtaNavSection[layoutVariant!].StyledGrid.tablet.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.CtaNavSection[layoutVariant!].StyledGrid.desktop.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.CtaNavSection[layoutVariant!].StyledGrid.desktop.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column-gap: ${({ withColGapp, layoutVariant, theme }) =>
      withColGapp ? theme.CtaNavSection[layoutVariant!].StyledGrid.widescreen.colGap : '0'};
    grid-row-gap: ${({ withRowGap, layoutVariant, theme }) =>
      withRowGap ? theme.CtaNavSection[layoutVariant!].StyledGrid.widescreen.rowGap : '0'};
    margin: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledGrid.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledGrid.widescreen.padding};
  }
`;

export default StyledGrid;
