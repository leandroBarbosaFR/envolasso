import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledNavDraw = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  height: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].StyledNavDraw.height};
  position: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].StyledNavDraw.position};
  z-index: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].StyledNavDraw.zIndex};
  top: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].StyledNavDraw.top};
  left: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].StyledNavDraw.left};
  bottom: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].StyledNavDraw.bottom};
  right: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].StyledNavDraw.right};
  background: ${({ layoutVariant, theme }) => theme.NavDraw[layoutVariant!].StyledNavDraw.background};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;
export default StyledNavDraw;
