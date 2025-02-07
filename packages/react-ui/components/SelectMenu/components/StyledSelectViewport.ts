import styled from 'styled-components';
import { Viewport } from '@radix-ui/react-select';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Viewport);

const StyledSelectViewport = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.display};
  flex-direction: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.flexDirection};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.mobile.padding};
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.mobile.gap};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.mobileLarge.padding};
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.mobileLarge.gap};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.tablet.padding};
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.tablet.gap};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.desktop.padding};
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.desktop.gap};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    padding: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.widescreen.padding};
    gap: ${({ variant, theme }) => theme.SelectMenu[variant!].StyledSelectViewport.widescreen.gap};
  }
`;

export default StyledSelectViewport;
