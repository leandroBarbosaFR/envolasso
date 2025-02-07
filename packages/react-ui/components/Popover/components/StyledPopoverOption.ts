import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledParagraph from '../../Paragraph/components/StyledParagraph';

const StyledPopoverOption = styled(StyledParagraph)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  color: ${({ layoutVariant, theme }) => theme.Popover[layoutVariant!].StyledPopoverOption.color};
  text-transform: ${({ layoutVariant, theme }) =>
    theme.Popover[layoutVariant!].StyledPopoverOption.textTransform};

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
    font-size: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.tablet.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.tablet.lineHeight};
    letter-spacing: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.tablet.letterSpacing};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.desktop.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.desktop.lineHeight};
    letter-spacing: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.desktop.letterSpacing};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    font-size: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.widescreen.fontSize};
    line-height: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.widescreen.lineHeight};
    letter-spacing: ${({ layoutVariant, theme }) =>
      theme.Popover[layoutVariant!].StyledPopoverOption.widescreen.letterSpacing};
  }
`;

export default StyledPopoverOption;
