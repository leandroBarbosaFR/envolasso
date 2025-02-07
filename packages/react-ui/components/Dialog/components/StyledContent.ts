import { Content } from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';
import { WithFilteredProps } from '../../../utils';

const contentShow = keyframes`
  from { opacity:0; transform: translate(-50%, -48%) scale(.96) }
  to{ opacity:1; transform: translate(-50%, -50%) scale(1) }
`;

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Content);

const StyledContent = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  z-index: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.zIndex};
  border-radius: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.borderRadius};
  background: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.background};
  box-shadow: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.boxShadow};
  position: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.position};
  top: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.top};
  left: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.left};
  transform: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.transform};
  overflow: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.overflow};
  justify-content: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.justifyContent};
  align-items: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.alignItems};
  animation: ${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobile.width};
    min-width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobile.minWidth};
    height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobile.height};
    max-height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobile.maxHeight};
    padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobile.padding};
    margin: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobile.margin};
    display: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobile.display};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    min-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.mobileLarge.minWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobileLarge.width};
    height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobileLarge.height};
    padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobileLarge.padding};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.mobileLarge.maxHeight};
    margin: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobileLarge.margin};
    display: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.mobileLarge.display};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    min-width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.tablet.minWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.tablet.width};
    height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.tablet.height};
    padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.tablet.padding};
    max-height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.tablet.maxHeight};
    display: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.tablet.display};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    min-width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.desktop.minWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.desktop.width};
    height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.desktop.height};
    padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.desktop.padding};
    max-height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.desktop.maxHeight};
    display: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.desktop.display};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    min-width: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.widescreen.minWidth};
    width: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.widescreen.width};
    height: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.widescreen.height};
    padding: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.widescreen.padding};
    max-height: ${({ layoutVariant, theme }) =>
      theme.Dialog[layoutVariant!].StyledContent.widescreen.maxHeight};
    display: ${({ layoutVariant, theme }) => theme.Dialog[layoutVariant!].StyledContent.widescreen.display};
  }
`;

export default StyledContent;
