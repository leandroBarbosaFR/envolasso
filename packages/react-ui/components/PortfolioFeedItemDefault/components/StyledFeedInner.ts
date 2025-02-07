import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledFeedInner = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.position};
  z-index: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.zIndex};
  top: ${({ layoutVariant, theme }) => theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.top};
  left: ${({ layoutVariant, theme }) => theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.left};
  bottom: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.bottom};
  right: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.right};
  background: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.background};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.borderRadius};
  pointer-events: ${({ layoutVariant, theme }) =>
    theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.pointerEvent};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.mobile.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.mobileLarge.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.tablet.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.desktop.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.widescreen.height};
    margin: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PortfolioFeedItemDefault[layoutVariant!].StyledFeedInner.widescreen.padding};
  }
`;

export default StyledFeedInner;
