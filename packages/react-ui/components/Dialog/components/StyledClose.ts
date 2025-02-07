import { Close } from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Close);

const StyledClose = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.StyledClose.position};
  z-index: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.StyledClose.zIndex};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    top: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.StyledClose.mobile.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.mobile.right};
    left: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.StyledClose.mobile.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.mobile.bottom};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    top: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.mobileLarge.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.mobileLarge.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.mobileLarge.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.mobileLarge.bottom};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    top: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.StyledClose.tablet.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.tablet.right};
    left: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.StyledClose.tablet.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.tablet.bottom};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    top: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.StyledClose.desktop.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.desktop.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.desktop.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.desktop.bottom};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    top: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.widescreen.top};
    right: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.widescreen.right};
    left: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.widescreen.left};
    bottom: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.StyledClose.widescreen.bottom};
  }
`;

export default StyledClose;
