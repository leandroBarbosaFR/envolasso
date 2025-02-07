import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledCheckBox = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.display};
  justify-content: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.width};
  align-items: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.alignItems};
  gap: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.gap};
  width: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.width};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    a {
      padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.mobile.padding};
    }
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    a {
      padding: ${({ variant, theme }) =>
        theme.FormInputCheckBox[variant!].StyledCheckBox.mobileLarge.padding};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    a {
      padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.tablet.padding};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    a {
      padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.desktop.padding};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    a {
      padding: ${({ variant, theme }) => theme.FormInputCheckBox[variant!].StyledCheckBox.widescreen.padding};
    }
  }
`;

export default StyledCheckBox;
