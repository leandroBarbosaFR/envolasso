import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSelectWrap = styled.div<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.position};
  display: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.display};
  align-items: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.alignitems};
  width: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.width};
  margin: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.margin};
  padding: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.padding};
  background: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.background};
  border: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.border};
  svg {
    pointer-events: ${({ variant, theme }) =>
      theme.FormInputSelect[variant!].StyledSelectWrap.svg.pointerEvents};
    position: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.svg.position};
    display: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.svg.display};
    fill: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.svg.fill};

    &:hover {
    fill: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.svg.fillHover};
    },
  }


  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    svg {
      right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.mobile.svg.right};
      left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.mobile.svg.left};
      top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.mobile.svg.top};
      bottom: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.mobile.svg.bottom};
      height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.mobile.svg.height};
      width: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.mobile.svg.width};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    svg {
      right: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelectWrap.mobileLarge.svg.right};
      left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.mobileLarge.svg.left};
      top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.mobileLarge.svg.top};
      bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelectWrap.mobileLarge.svg.bottom};
      height: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelectWrap.mobileLarge.svg.height};
      width: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelectWrap.mobileLarge.svg.width};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    svg {
      right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.tablet.svg.right};
      left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.tablet.svg.left};
      top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.tablet.svg.top};
      bottom: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.tablet.svg.bottom};
      height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.tablet.svg.height};
      width: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.tablet.svg.width};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    svg {
      right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.desktop.svg.right};
      left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.desktop.svg.left};
      top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.desktop.svg.top};
      bottom: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.desktop.svg.bottom};
      height: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.desktop.svg.height};
      width: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.desktop.svg.width};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    svg {
      right: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.widescreen.svg.right};
      left: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.widescreen.svg.left};
      top: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.widescreen.svg.top};
      bottom: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelectWrap.widescreen.svg.bottom};
      height: ${({ variant, theme }) =>
        theme.FormInputSelect[variant!].StyledSelectWrap.widescreen.svg.height};
      width: ${({ variant, theme }) => theme.FormInputSelect[variant!].StyledSelectWrap.widescreen.svg.width};
    }
  }
`;

export default StyledSelectWrap;
