import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledHeading from '../../Heading/components/StyledHeading';

const StyledSubTitle = styled(StyledHeading)<StyledComponentProps>`
  color: ${({ layoutVariant, theme }) =>
    theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.color};
  span {
    color: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.span.color};
  }
  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.textAlign};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobile.borderRadius};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.textAlign};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.mobileLarge.borderRadius};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.textAlign};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.tablet.borderRadius};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.textAlign};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.desktop.borderRadius};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    margin: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.margin};
    text-align: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.textAlign};

    writing-mode: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.writingMode};
    text-orientation: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.textOrientation};
    rotate: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.rotate};

    height: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.height};
    width: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.width};
    position: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.position};
    z-index: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.zIndex};
    top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.top};
    bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.bottom};
    left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.left};
    right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.right};
    pointer-events: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.pointerEvents};
    background: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.background};
    border: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.border};
    border-top: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.borderTop};
    border-bottom: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.borderBottom};
    border-left: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.borderLeft};
    border-right: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.borderRight};
    border-radius: ${({ layoutVariant, theme }) =>
      theme.PricingSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.widescreen.borderRadius};
  }
`;

export default StyledSubTitle;
