import { StandardPage } from '@agency-platform/shared-types';
import { StandardPageBodyTheme } from '@agency-platform/themes';
import { PortableText } from '@portabletext/react';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
// Components
import CustomPortableText from '../../utils/portableText';
import BlockContent from '../BlockContent';
// Styles
import StyledArticle from './components/StyledArticle';
import StyledArticleWrap from './components/StyledArticleWrap';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';

// Props
interface StandardPageBodyProps {
  layoutVariant: keyof StandardPageBodyTheme;
  isFluid: boolean;
  as?: string;
  data: StandardPage;
}

const StandardPageBody = ({ layoutVariant, data }: StandardPageBodyProps) => {
  const theme = useTheme();
  const { subtitle, title, body } = data;

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.StandardPageBody[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.StandardPageBody[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.StandardPageBody[layoutVariant!].StyledGrid.withColGapp}
        >
          {subtitle && (
            <StyledSubTitleWrap layoutVariant={layoutVariant}>
              <StyledSubTitle
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.StandardPageBody[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
              >
                {subtitle}
              </StyledSubTitle>
            </StyledSubTitleWrap>
          )}
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                layoutVariant={layoutVariant}
                as={'h2'}
                variant={theme.StandardPageBody[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticleWrap layoutVariant={layoutVariant}>
              <StyledArticle
                layoutVariant={layoutVariant}
                variant={theme.StandardPageBody[layoutVariant!].StyledArticleWrap.StyledArticle.variant}
              >
                {/* <PortableText value={body} components={CustomPortableText} /> */}
                <BlockContent value={body} layoutVariant={'default'} />
              </StyledArticle>
            </StyledArticleWrap>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default StandardPageBody;
