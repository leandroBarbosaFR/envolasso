import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledHeadingWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.BlogSinglePage[layoutVariant!].StyledHeadingWrap.widescreen.padding};
  }
`;
export default StyledHeadingWrap;
