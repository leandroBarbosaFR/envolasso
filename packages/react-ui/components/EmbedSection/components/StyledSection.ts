import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';
import StyledSectionBase from '../../Section/components/StyledSection';

const StyledSection = styled(StyledSectionBase)<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  background: ${({ theme, layoutVariant }) => theme.EmbedSection[layoutVariant!].StyledSection.background};
  position: ${({ theme, layoutVariant }) => theme.EmbedSection[layoutVariant!].StyledSection.position};

  img {
    object-fit: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.img.objectFit};
  }
  // ==========================================================================
  // Mobile 220px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobile} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.mobile.height};
    margin: ${({ theme, layoutVariant }) => theme.EmbedSection[layoutVariant!].StyledSection.mobile.margin};
    padding: ${({ theme, layoutVariant }) => theme.EmbedSection[layoutVariant!].StyledSection.mobile.padding};
  }
  // ==========================================================================
  // Mobile Large 270px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.mobileLarge} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.mobileLarge.height};
    margin: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.mobileLarge.margin};
    padding: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.mobileLarge.padding};
  }
  // ==========================================================================
  // Tablet
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.tablet} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.tablet.height};
    margin: ${({ theme, layoutVariant }) => theme.EmbedSection[layoutVariant!].StyledSection.tablet.margin};
    padding: ${({ theme, layoutVariant }) => theme.EmbedSection[layoutVariant!].StyledSection.tablet.padding};
  }
  // ==========================================================================
  // Desktop 300px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.desktop} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.desktop.height};
    margin: ${({ theme, layoutVariant }) => theme.EmbedSection[layoutVariant!].StyledSection.desktop.margin};
    padding: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.desktop.padding};
  }
  // ==========================================================================
  // widescreen 350px
  // ==========================================================================
  ${({ theme }) => theme.mediaQueries.widescreen} {
    min-height: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.widescreen.height};
    margin: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.widescreen.margin};
    padding: ${({ theme, layoutVariant }) =>
      theme.EmbedSection[layoutVariant!].StyledSection.widescreen.padding};
  }
`;
export default StyledSection;
