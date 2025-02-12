import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledIconNav = styled.nav<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.position};
  z-index: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.zIndex};
  display: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.display};
  flex-wrap: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.flexWrap};
  pointer-events: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.pointerEvents};
  top: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.top};
  left: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.left};
  right: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.right};
  bottom: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.bottom};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    top: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobile.top};
    left: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobile.left};
    right: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobile.right};
    bottom: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobile.bottom};
    gap: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    top: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobileLarge.top};
    left: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobileLarge.left};
    right: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobileLarge.right};
    bottom: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobileLarge.bottom};
    gap: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    top: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.tablet.top};
    left: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.tablet.left};
    right: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.tablet.right};
    bottom: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.tablet.bottom};
    gap: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    top: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.desktop.top};
    left: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.desktop.left};
    right: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.desktop.right};
    bottom: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.desktop.bottom};
    gap: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    top: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.widescreen.top};
    left: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.widescreen.left};
    right: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.widescreen.right};
    bottom: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.widescreen.bottom};
    gap: ${({ layoutVariant, theme }) => theme.PostBody[layoutVariant!].StyledIconNav.widescreen.gap};
  }
`;
export default StyledIconNav;
