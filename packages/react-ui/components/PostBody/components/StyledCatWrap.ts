import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCatWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  justify-self: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.justifySelf};
  align-self: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.alignSelf};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledCatWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledCatWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledCatWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledCatWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledCatWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledCatWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledCatWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PostBody[layoutVariant!].StyledCatWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledCatWrap.widescreen.padding};
  }
`;
export default StyledCatWrap;
