import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledAddress = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.AddressList[layoutVariant!].StyledAddress.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.AddressList[layoutVariant!].StyledAddress.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) => theme.AddressList[layoutVariant!].StyledAddress.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.AddressList[layoutVariant!].StyledAddress.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) => theme.AddressList[layoutVariant!].StyledAddress.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddress.widescreen.margin};
  }
`;

export default StyledAddress;
