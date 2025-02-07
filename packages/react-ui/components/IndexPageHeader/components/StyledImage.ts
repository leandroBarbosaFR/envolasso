import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledImage = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledImage.display};
  justify-content: ${({ layoutVariant, theme }) =>
    theme.IndexPageHeader[layoutVariant!].StyledImage.justifyContent};
  align-content: ${({ layoutVariant, theme }) =>
    theme.IndexPageHeader[layoutVariant!].StyledImage.alignContent};
  z-index: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledImage.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledImage.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.mobile.padding};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledImage.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.IndexPageHeader[layoutVariant!].StyledImage.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.IndexPageHeader[layoutVariant!].StyledImage.widescreen.padding};
  }
`;
export default StyledImage;
