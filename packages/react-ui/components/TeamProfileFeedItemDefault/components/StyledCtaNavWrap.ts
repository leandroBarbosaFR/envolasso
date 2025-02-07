import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCtaNavWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.display};
  z-index: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.zIndex};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.justifyContent};
  align-self: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.alignSelf};

  position: ${({ layoutVariant, theme }) =>
    theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.position};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobile.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobile.top};
    left: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobile.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobile.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobile.right};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobileLarge.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobileLarge.top};
    left: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobileLarge.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.mobileLarge.right};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.tablet.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.tablet.top};
    left: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.tablet.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.tablet.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.tablet.right};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.desktop.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.desktop.top};
    left: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.desktop.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.desktop.right};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.widescreen.padding};
    top: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.widescreen.top};
    left: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.widescreen.bottom};
    right: ${({ layoutVariant, theme }) =>
      theme.TeamProfileFeedItemDefault[layoutVariant!].StyledCtaNavWrap.widescreen.right};
  }
`;

export default StyledCtaNavWrap;
