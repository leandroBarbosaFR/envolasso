import Image from 'next/image';
import styled from 'styled-components';
import { WithFilteredProps } from '../../../utils';

// Create a new component with filtered props
const FilteredImage = WithFilteredProps(Image);

const StyledImg = styled(FilteredImage)`
  // ==========================================================================
  // Global
  // ==========================================================================
  position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.position};
  display: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.display};
  width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.width};
  max-width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.maxWidth};
  height: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.height};
  object-fit: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.objectFit};
  filter: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.filter};
  margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.margin};
  border-radius: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.borderRadius};
  overflow: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.overflow};

  // ==========================================================================
  // Mobile
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobile.position};
    display: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobile.display};
    width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobile.width};
    max-width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobile.maxWidth};
    height: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobile.height};
    object-fit: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobile.objectFit};
    filter: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobile.filter};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobile.margin};
  }
  // ==========================================================================
  // Mobile Large
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobileLarge.position};
    display: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobileLarge.display};
    width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobileLarge.width};
    max-width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobileLarge.maxWidth};
    height: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobileLarge.height};
    object-fit: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImg.mobileLarge.objectFit};
    filter: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobileLarge.filter};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.mobileLarge.margin};
  }

  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.tablet.position};
    display: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.tablet.display};
    width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.tablet.width};
    max-width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.tablet.maxWidth};
    height: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.tablet.height};
    object-fit: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.tablet.objectFit};
    filter: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.tablet.filter};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.tablet.margin};
  }

  // ==========================================================================
  // Desktop
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.desktop.position};
    display: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.desktop.display};
    width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.desktop.width};
    max-width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.desktop.maxWidth};
    height: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.desktop.height};
    object-fit: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.desktop.objectFit};
    filter: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.desktop.filter};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.desktop.margin};
  }

  // ==========================================================================
  // widescreen
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    position: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.widescreen.position};
    display: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.widescreen.display};
    width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.widescreen.width};
    max-width: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.widescreen.maxWidth};
    height: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.widescreen.height};
    object-fit: ${({ layoutVariant, theme }) =>
      theme.ImageTag[layoutVariant!].StyledImg.widescreen.objectFit};
    filter: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.widescreen.filter};
    margin: ${({ layoutVariant, theme }) => theme.ImageTag[layoutVariant!].StyledImg.widescreen.margin};
  }
`;
export default StyledImg;
