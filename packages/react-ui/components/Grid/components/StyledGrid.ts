import styled from 'styled-components';
import { StyledComponentProps } from '@agency-platform/shared-types';

const StyledGrid = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ theme }) => theme.grid.display};
  grid-template-columns: ${({ theme }) => theme.grid.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ theme }) => theme.grid.mobile.height};
    align-self: ${({ theme }) => theme.grid.mobile.alignSelf};
    grid-column-gap: ${({ withColGapp, theme }) => (withColGapp ? theme.grid.mobile.colGap : '0')};
    grid-row-gap: ${({ withRowGap, theme }) => (withRowGap ? theme.grid.mobile.rowGap : '0')};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ theme }) => theme.grid.mobileLarge.height};
    align-self: ${({ theme }) => theme.grid.mobileLarge.alignSelf};
    grid-column-gap: ${({ withColGapp, theme }) => (withColGapp ? theme.grid.mobileLarge.colGap : '0')};
    grid-row-gap: ${({ withRowGap, theme }) => (withRowGap ? theme.grid.mobileLarge.rowGap : '0')};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ theme }) => theme.grid.tablet.height};
    align-self: ${({ theme }) => theme.grid.tablet.alignSelf};
    grid-column-gap: ${({ withColGapp, theme }) => (withColGapp ? theme.grid.tablet.colGap : '0')};
    grid-row-gap: ${({ withRowGap, theme }) => (withRowGap ? theme.grid.tablet.rowGap : '0')};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ theme }) => theme.grid.desktop.height};
    align-self: ${({ theme }) => theme.grid.desktop.alignSelf};
    grid-column-gap: ${({ withColGapp, theme }) => (withColGapp ? theme.grid.desktop.colGap : '0')};
    grid-row-gap: ${({ withRowGap, theme }) => (withRowGap ? theme.grid.desktop.rowGap : '0')};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ theme }) => theme.grid.widescreen.height};
    align-self: ${({ theme }) => theme.grid.widescreen.alignSelf};
    grid-column-gap: ${({ withColGapp, theme }) => (withColGapp ? theme.grid.widescreen.colGap : '0')};
    grid-row-gap: ${({ withRowGap, theme }) => (withRowGap ? theme.grid.widescreen.rowGap : '0')};
  }
`;
export default StyledGrid;
