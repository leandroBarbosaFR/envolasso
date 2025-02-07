import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledBodycopyWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.mobile.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.mobileLarge.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.mobileLarge.padding};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.tablet.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.desktop.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    grid-column: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.widescreen.margin};
    padding: ${({ layoutVariant, theme }) =>
      theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.widescreen.padding};
  }
`;
export default StyledBodycopyWrap;
