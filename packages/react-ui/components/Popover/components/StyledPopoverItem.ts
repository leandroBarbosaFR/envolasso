import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledPopoverItem = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  cursor: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledPopoverItem.cursor};
  text-align: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledPopoverItem.textAlign};

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
    padding: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledPopoverItem.tablet.padding};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledPopoverItem.desktop.padding};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverItem.widescreen.padding};
  }
`;

export default StyledPopoverItem;
