import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledPageHeader = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ layoutVariant, theme }) =>
    theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.background};
  position: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.position};
  overflow: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.overflow};
  clip-path: ${({ layoutVariant, theme }) => theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.clipPth};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobile.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobile.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobile.maxHeight};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobileLarge.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobileLarge.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobileLarge.maxHeight};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.tablet.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.tablet.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.tablet.maxHeight};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.desktop.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.desktop.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.desktop.maxHeight};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.widescreen.height};
    min-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.widescreen.minHeight};
    max-height: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.widescreen.maxHeight};
    margin: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.PageHeaderMedia[layoutVariant!].StyledPageHeader.widescreen.padding};
  }
`;
export default StyledPageHeader;
