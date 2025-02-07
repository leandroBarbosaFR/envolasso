import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeadingBase from '../../Heading/components/StyledHeading';

const StyledHeading = styled(StyledHeadingBase)<StyledComponentProps>`
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    font-family: 'Overused Grotesk', sans-serif;
    font-size: 40px;
    font-weight: 500;
    line-height: 50px;
    letter-spacing: -0.01em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    background: linear-gradient(180deg, #ffffff 0%, #7a7a7a 106.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    opacity: 1;
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
    font-family: 'Overused Grotesk', sans-serif;
    font-size: 72px;
    font-weight: 500;
    line-height: 90px;
    letter-spacing: -0.01em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    background: linear-gradient(180deg, #ffffff 0%, #7a7a7a 106.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    opacity: 1;
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

export default StyledHeading;
