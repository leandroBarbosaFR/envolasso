import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledClientLogoItem = styled.a<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  filter: ${({ layoutVariant, theme }) =>
    theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.filter};
  opacity: ${({ layoutVariant, theme }) =>
    theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.opacity};
  display: ${({ layoutVariant, theme }) =>
    theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.display};
  align-items: ${({ layoutVariant, theme }) =>
    theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.alignItems};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.mobile.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.mobileLarge.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.tablet.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.desktop.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.widescreen.gridColumn};
    margin: ${({ layoutVariant, theme }) =>
      theme.ClientLogoSection[layoutVariant!].StyledClientLogoItem.widescreen.margin};
  }
`;

export default StyledClientLogoItem;
