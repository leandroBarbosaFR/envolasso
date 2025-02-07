import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaNavWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledCtaNavWrap.zIndex};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.PageHeader[layoutVariant!].StyledCtaNavWrap.justifyContent};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobile.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobile.display};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobile.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobile.alignSelf};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobileLarge.display};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobileLarge.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.mobileLarge.alignSelf};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.tablet.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.tablet.display};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledCtaNavWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.tablet.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.tablet.alignSelf};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.desktop.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.desktop.display};
    margin: ${({ layoutVariant, theme }) => theme.PageHeader[layoutVariant!].StyledCtaNavWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.desktop.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.desktop.alignSelf};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.widescreen.gridRow};
    display: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.widescreen.display};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.widescreen.padding};
    align-self: ${({ layoutVariant, theme }) =>
      theme.PageHeader[layoutVariant!].StyledCtaNavWrap.widescreen.alignSelf};
  }
`;

export default StyledCtaNavWrap;
