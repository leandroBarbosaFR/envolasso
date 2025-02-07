import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledMain = styled.main<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].background};
  overflow: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].overflow};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].mobile.height};
    min-height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].mobile.minHeight};
    margin: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].mobile.margin};
    padding: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].mobileLarge.height};
    min-height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].mobileLarge.minHeight};
    margin: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].tablet.height};
    min-height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].tablet.minHeight};
    margin: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].tablet.margin};
    padding: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].desktop.height};
    min-height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].desktop.minHeight};
    margin: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].desktop.margin};
    padding: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].widescreen.height};
    min-height: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].widescreen.minHeight};
    margin: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].widescreen.margin};
    padding: ${({ layoutVariant, theme }) => theme.main[layoutVariant!].widescreen.padding};
  }
`;
export default StyledMain;
