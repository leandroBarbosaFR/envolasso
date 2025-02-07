import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaNavWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.display};
  align-content: ${({ layoutVariant, theme }) =>
    theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.alignContent};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    gap: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    gap: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    gap: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    gap: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    gap: ${({ layoutVariant, theme }) => theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.mobile.gap};
    grid-column: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.CtaNavSection[layoutVariant!].StyledCtaNavWrap.widescreen.padding};
  }
`;

export default StyledCtaNavWrap;
