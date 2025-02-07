import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledGridBase from '../../Grid/components/StyledGrid';

const StyledAddressList = styled(StyledGridBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ layoutVariant, theme }) => theme.AddressList[layoutVariant!].StyledAddressList.display};
  grid-template-columns: ${({ layoutVariant, theme }) =>
    theme.AddressList[layoutVariant!].StyledAddressList.gridTemplateColumns};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.mobile.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.AddressList[layoutVariant!].StyledAddressList.mobile.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.AddressList[layoutVariant!].StyledAddressList.mobile.rowGap : '0'};

    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.mobile.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.mobile.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.mobile.margin};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.mobileLarge.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.AddressList[layoutVariant!].StyledAddressList.mobileLarge.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.AddressList[layoutVariant!].StyledAddressList.mobileLarge.rowGap : '0'};

    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.mobileLarge.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.mobileLarge.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.tablet.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.AddressList[layoutVariant!].StyledAddressList.tablet.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.AddressList[layoutVariant!].StyledAddressList.tablet.rowGap : '0'};

    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.tablet.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.tablet.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.desktop.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.AddressList[layoutVariant!].StyledAddressList.desktop.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.AddressList[layoutVariant!].StyledAddressList.desktop.rowGap : '0'};

    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.desktop.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.desktop.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.widescreen.height};
    grid-column-gap: ${({ layoutVariant, withColGapp, theme }) =>
      withColGapp ? theme.AddressList[layoutVariant!].StyledAddressList.widescreen.colGap : '0'};
    grid-row-gap: ${({ layoutVariant, withRowGap, theme }) =>
      withRowGap ? theme.AddressList[layoutVariant!].StyledAddressList.widescreen.rowGap : '0'};

    grid-column: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.widescreen.gridColumn};
    grid-row: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.widescreen.gridRow};
    margin: ${({ layoutVariant, theme }) =>
      theme.AddressList[layoutVariant!].StyledAddressList.widescreen.margin};
  }
`;
export default StyledAddressList;
