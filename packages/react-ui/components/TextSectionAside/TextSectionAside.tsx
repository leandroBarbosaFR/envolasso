import { TextSectionAsideTheme } from '@agency-platform/themes';
import { PortableText } from '@portabletext/react';
import React from 'react';
import CustomPortableText from '../../utils/portableText';
import type { Cta } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import ColoredText from '../ColoredText';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledArticleAside from './components/StyledArticleAside';
import StyledCtaNav from './components/StyledCtaNav';
import StyledCtaNavWrap from './components/StyledCtaNavWrap';
// Props
export interface TextSectionAsideProps {
  data: {
    layoutVariant: keyof TextSectionAsideTheme;
    subtitle: string;
    title: string;
    body: any;
    aside: any;
    cta: Cta[];
  };
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgTopAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const TextSectionAside = ({
  data,
  SectionBgTopAsset,
  SectionBgBottomAsset,
  ContainerBgTopAsset,
  ContainerBgBottomAsset
}: TextSectionAsideProps) => {
  const { layoutVariant, subtitle, title, body, aside, cta } = data;
  const theme = useTheme();

  return (
    <StyledSection layoutVariant={layoutVariant}>
      {SectionBgTopAsset && SectionBgTopAsset}
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.TextSectionAside[layoutVariant!].StyledContainer.isFluid}
      >
        {ContainerBgTopAsset && ContainerBgTopAsset}
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.TextSectionAside[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.TextSectionAside[layoutVariant!].StyledGrid.withColGapp}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h2'}
                layoutVariant={layoutVariant}
                variant={theme.TextSectionAside[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                <ColoredText text={subtitle} />
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h1'}
                layoutVariant={layoutVariant}
                variant={theme.TextSectionAside[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                <ColoredText text={title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.TextSectionAside[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          {aside && (
            <StyledArticleAside
              layoutVariant={layoutVariant}
              variant={theme.TextSectionAside[layoutVariant!].StyledArticleAside.variant}
            >
              <PortableText value={aside} components={CustomPortableText} />
            </StyledArticleAside>
          )}
          {cta && (
            <StyledCtaNavWrap layoutVariant={layoutVariant}>
              <StyledCtaNav
                layoutVariant={layoutVariant}
                data={cta}
                variant={theme.TextSectionAside[layoutVariant!].StyledCtaNavWrap.StyledCtaNav.variant}
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

export default TextSectionAside;
