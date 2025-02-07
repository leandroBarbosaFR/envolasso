import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSubTitleWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PriceSection[layoutVariant!].StyledSubTitleWrap.widescreen.padding};
  }
`;
export default StyledSubTitleWrap;
