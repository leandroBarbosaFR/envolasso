import { TextSectionTheme } from '@agency-platform/themes';
import { PortableText } from '@portabletext/react';
import React from 'react';
import CustomPortableText from '../../utils/portableText';
import type { Cta } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
// Props
export interface TextSectionProps {
  data: {
    layoutVariant: keyof TextSectionTheme;
    subtitle: string;
    title: string;
    body: any;
    cta: Cta[];
  };
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgTopAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const TextSection = ({
  data,
  SectionBgTopAsset,
  SectionBgBottomAsset,
  ContainerBgTopAsset,
  ContainerBgBottomAsset
}: TextSectionProps) => {
  if (!data) return null;
  const { layoutVariant, subtitle, title, body, cta } = data;
  const theme = useTheme();

  return (
    <StyledSection layoutVariant={layoutVariant}>
      {SectionBgTopAsset && SectionBgTopAsset}
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.TextSection[layoutVariant!].StyledContainer.isFluid}
      >
        {ContainerBgTopAsset && ContainerBgTopAsset}
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.TextSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.TextSection[layoutVariant!].StyledGrid.withColGapp}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h2'}
                layoutVariant={layoutVariant}
                variant={theme.TextSection[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                {subtitle}
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h1'}
                layoutVariant={layoutVariant}
                variant={theme.TextSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.TextSection[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                layoutVariant={layoutVariant}
                data={cta}
                variant={theme.TextSection[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
              />
            </StyledCtaNavWrap>
          )}
        </StyledGrid>
        {ContainerBgBottomAsset && ContainerBgBottomAsset}
      </StyledContainer>
      {SectionBgBottomAsset && SectionBgBottomAsset}
    </StyledSection>
  );
};

export default TextSection;
