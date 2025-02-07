import { StyledComponentProps } from '@agency-platform/shared-types';
import { Content } from '@radix-ui/react-tooltip';
import styled from 'styled-components';

const StyledToolTipContent = styled(Content)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.ToolTip[layoutVariant!].StyledToolTipContent.zIndex};
  border-radius: ${({ layoutVariant, theme }) =>
    theme.ToolTip[layoutVariant!].StyledToolTipContent.borderRadius};
  padding: ${({ layoutVariant, theme }) => theme.ToolTip[layoutVariant!].StyledToolTipContent.padding};
  font-size: ${({ layoutVariant, theme }) => theme.ToolTip[layoutVariant!].StyledToolTipContent.fontSize};
  color: ${({ layoutVariant, theme }) => theme.ToolTip[layoutVariant!].StyledToolTipContent.color};
  background: ${({ layoutVariant, theme }) => theme.ToolTip[layoutVariant!].StyledToolTipContent.background};
  box-shadow: ${({ layoutVariant, theme }) => theme.ToolTip[layoutVariant!].StyledToolTipContent.boxShadow};
  user-select: ${({ layoutVariant, theme }) => theme.ToolTip[layoutVariant!].StyledToolTipContent.userSelect};
  animation-duration: ${({ layoutVariant, theme }) =>
    theme.ToolTip[layoutVariant!].StyledToolTipContent.animationDuration};
  animation-timing-function: ${({ layoutVariant, theme }) =>
    theme.ToolTip[layoutVariant!].StyledToolTipContent.animationTimingFunction};
  will-change: ${({ layoutVariant, theme }) => theme.ToolTip[layoutVariant!].StyledToolTipContent.willChange};
  text-transform: ${({ layoutVariant, theme }) =>
    theme.ToolTip[layoutVariant!].StyledToolTipContent.textTransform};

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='delayed-open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='delayed-open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }

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

export default StyledToolTipContent;
