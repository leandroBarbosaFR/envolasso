import React from 'react';
import type { IndexPageHeaderTheme } from '@agency-platform/themes';
// Theme
import { useTheme } from 'styled-components';
// Styles
import StyledIndexPageHeader from './components/StyledIndexPageHeader';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';

// Props
export interface IndexPageHeaderProps {
  layoutVariant: keyof IndexPageHeaderTheme;
  title: string;
}

const IndexPageHeader = ({ layoutVariant, title }: IndexPageHeaderProps) => {
  const theme = useTheme();

  return (
    <StyledIndexPageHeader layoutVariant={layoutVariant}>
      <StyledContainer layoutVariant={layoutVariant} isFluid={true}>
        <StyledGrid
          withRowGap={theme.IndexPageHeader[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.IndexPageHeader[layoutVariant!].StyledGrid.withColGapp}
          layoutVariant={layoutVariant}
        >
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h2'}
                variant={theme.AccordionSection[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
                layoutVariant={layoutVariant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
        </StyledGrid>
      </StyledContainer>
    </StyledIndexPageHeader>
  );
};

export default IndexPageHeader;
