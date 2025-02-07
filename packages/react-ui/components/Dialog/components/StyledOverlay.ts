import { Overlay } from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';
import { WithFilteredProps } from '../../../utils';

const overlayShow = keyframes`
  from { opacity:0;}
  to { opacity:1; }
`;

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Overlay);

const StyledOverlay = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledOverlay.zIndex};
  background: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledOverlay.background};
  backdrop-filter: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledOverlay.backdropFilter};
  position: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledOverlay.position};
  top: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledOverlay.top};
  bottom: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledOverlay.bottom};
  right: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledOverlay.right};
  left: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledOverlay.left};
  animation: ${overlayShow} 250ms cubic-bezier(0.16, 1, 0.3, 1);

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
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
  }
`;

export default StyledOverlay;
