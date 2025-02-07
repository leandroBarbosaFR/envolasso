import Link from 'next/link';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredLink = WithFilteredProps(Link);

const StyledLogo = styled(FilteredLink)`
  // ==========================================================================
  // Global
  // ==========================================================================
  display: ${({ theme, variant }) => theme.logo[variant!].display};
  margin: ${({ theme, variant }) => theme.logo[variant!].margin};
  padding: ${({ theme, variant }) => theme.logo[variant!].padding};
  border-radius: ${({ theme, variant }) => theme.logo[variant!].borderRadius};
  background: ${({ theme, variant }) => theme.logo[variant!].background};

  // Tranisiton spcific styles
  transition: ${({ theme, variant }) => theme.logo[variant!].transition};
  transition: ${({ theme, variant }) => theme.logo[variant!].transitionTransform};
  -webkit-transition: ${({ theme, variant }) => theme.logo[variant!].webkitTransition};
  -moz-transition: ${({ theme, variant }) => theme.logo[variant!].mozTransition};
  -o-transition: ${({ theme, variant }) => theme.logo[variant!].oTransition};
  -webkit-tap-highlight-color: ${({ theme, variant }) => theme.logo[variant!].webkitTapHighlightColor};
  cursor: ${({ theme, variant }) => theme.logo[variant!].cursor};

  svg {
    fill: ${({ theme, variant }) => theme.logo[variant!].fill};
  }

  &:hover {
    opacity: ${({ theme, variant }) => theme.logo[variant!].opacityHover};
    background: ${({ theme, variant }) => theme.logo[variant!].backgroundHover};
    svg {
      fill: ${({ theme, variant }) => theme.logo[variant!].fillHover};
    }
  }

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    height: ${({ theme, variant }) => theme.logo[variant!].mobile.height};
    width: ${({ theme, variant }) => theme.logo[variant!].mobile.width};
    margin: ${({ theme, variant }) => theme.logo[variant!].mobile.margin};
    padding: ${({ theme, variant }) => theme.logo[variant!].mobile.padding};
    border: ${({ theme, variant }) => theme.logo[variant!].mobile.border};

    svg {
      height: ${({ theme, variant }) => theme.logo[variant!].mobile.height};
      width: ${({ theme, variant }) => theme.logo[variant!].mobile.width};
    }
  }

  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    height: ${({ theme, variant }) => theme.logo[variant!].mobileLarge.height};
    width: ${({ theme, variant }) => theme.logo[variant!].mobileLarge.width};
    margin: ${({ theme, variant }) => theme.logo[variant!].mobileLarge.margin};
    padding: ${({ theme, variant }) => theme.logo[variant!].mobileLarge.padding};
    border: ${({ theme, variant }) => theme.logo[variant!].mobileLarge.border};

    svg {
      height: ${({ theme, variant }) => theme.logo[variant!].mobileLarge.height};
      width: ${({ theme, variant }) => theme.logo[variant!].mobileLarge.width};
    }
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    height: ${({ theme, variant }) => theme.logo[variant!].tablet.height};
    width: ${({ theme, variant }) => theme.logo[variant!].tablet.width};
    margin: ${({ theme, variant }) => theme.logo[variant!].tablet.margin};
    padding: ${({ theme, variant }) => theme.logo[variant!].tablet.padding};
    border: ${({ theme, variant }) => theme.logo[variant!].tablet.border};

    svg {
      height: ${({ theme, variant }) => theme.logo[variant!].tablet.height};
      width: ${({ theme, variant }) => theme.logo[variant!].tablet.width};
    }
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    height: ${({ theme, variant }) => theme.logo[variant!].desktop.height};
    width: ${({ theme, variant }) => theme.logo[variant!].desktop.width};
    margin: ${({ theme, variant }) => theme.logo[variant!].desktop.margin};
    padding: ${({ theme, variant }) => theme.logo[variant!].desktop.padding};
    border: ${({ theme, variant }) => theme.logo[variant!].desktop.border};

    svg {
      height: ${({ theme, variant }) => theme.logo[variant!].desktop.height};
      width: ${({ theme, variant }) => theme.logo[variant!].desktop.width};
    }
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    height: ${({ theme, variant }) => theme.logo[variant!].widescreen.height};
    width: ${({ theme, variant }) => theme.logo[variant!].widescreen.width};
    margin: ${({ theme, variant }) => theme.logo[variant!].widescreen.margin};
    padding: ${({ theme, variant }) => theme.logo[variant!].widescreen.padding};
    border: ${({ theme, variant }) => theme.logo[variant!].widescreen.border};

    svg {
      height: ${({ theme, variant }) => theme.logo[variant!].widescreen.height};
      width: ${({ theme, variant }) => theme.logo[variant!].widescreen.width};
    }
  }
`;

export default StyledLogo;
