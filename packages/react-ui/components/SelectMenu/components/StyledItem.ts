import { Item } from '@radix-ui/react-select';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Item);

const StyledItem = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  text-transform: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.textTransform};
  cursor: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.cursor};
  color: ${({ isActive, theme, variant }) =>
    isActive
      ? theme.SelectMenu[variant!].StyledItem.colorActive
      : theme.SelectMenu[variant!].StyledItem.color};
  &[data-disabled] {
    color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.dataDisabled.color};
    pointer-events: ${({ variant, theme }) =>
      theme.SelectMenu[variant!].StyledItem.dataDisabled.pointerEvents};
  }
  &[data-highlighted] {
    color: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.dataHighlighted.color};
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.mobile.fontSize};
    line-height: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.mobile.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.mobile.letterSpacing};
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
    font-size: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.widescreen.fontSize};
    line-height: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.widescreen.lineHeight};
    letter-spacing: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledItem.widescreen.letterSpacing};
  }
`;

export default StyledItem;
