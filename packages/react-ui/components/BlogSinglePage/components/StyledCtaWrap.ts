import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledCtaWrap.widescreen.padding};
  }
`;
export default StyledCtaWrap;
