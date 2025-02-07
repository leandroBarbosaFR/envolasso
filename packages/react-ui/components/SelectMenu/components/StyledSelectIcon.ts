import styled from 'styled-components';
import { SelectIcon } from '@radix-ui/react-select';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(SelectIcon);

const StyledSelectIcon = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  height: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectIcon.height};
  width: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectIcon.width};
  display: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectIcon.display};
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    svg {
      fill: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectIcon.mobile.svg.fill};
      width: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectIcon.mobile.svg.width};
      display: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectIcon.mobile.svg.display};
    }
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

export default StyledSelectIcon;
