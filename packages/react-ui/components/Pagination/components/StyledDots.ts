import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledDots = styled.span<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.background};
  border-radius: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.borderRadius};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.mobile.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.mobile.width};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.mobileLarge.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.mobileLarge.width};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.tablet.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.tablet.width};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.desktop.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.desktop.width};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.widescreen.height};
    width: ${({ layoutVariant, theme }) => theme.Pagination[layoutVariant!].StyledDots.widescreen.width};
  }
`;

export default StyledDots;
