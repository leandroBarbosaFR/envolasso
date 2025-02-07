import { Close } from '@radix-ui/react-toast';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredComponent = WithFilteredProps(Close);

const StyledButton = styled(FilteredComponent)`
  // ==========================================================================
  // Global
  // ==========================================================================
  all: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.all};
  position: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.position};
  top: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.top};
  left: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.left};
  transform: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.transform};
  background: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.background};
  width: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.width};
  height: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.height};
  display: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.display};
  justify-content: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.justifyContent};
  align-items: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.alignItems};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    border: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobile.border};
    border-top: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobile.borderTop};
    border-right: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobile.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobile.borderBottom};
    border-left: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobile.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobile.borderRadius};
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    border: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobileLarge.border};
    border-top: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobileLarge.borderTop};
    border-right: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobileLarge.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobileLarge.borderBottom};
    border-left: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobileLarge.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    border: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.tablet.border};
    border-top: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.tablet.borderTop};
    border-right: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.tablet.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.tablet.borderBottom};
    border-left: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.tablet.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    border: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.desktop.border};
    border-top: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.desktop.borderTop};
    border-right: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.desktop.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.desktop.borderBottom};
    border-left: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.desktop.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    border: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.widescreen.border};
    border-top: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.widescreen.borderTop};
    border-right: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.widescreen.borderRight};
    border-bottom: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.widescreen.borderBottom};
    border-left: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.widescreen.borderLeft};
    border-radius: ${({ variant, theme }) => theme.Toast[variant!].StyledButton.widescreen.borderRadius};
  }
`;

export default StyledButton;
