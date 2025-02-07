import { ContactIndexTheme } from '@agency-platform/themes';
import { PortableText } from '@portabletext/react';
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
// components
import { CustomPortableText } from '../../utils';
import ColoredText from '../ColoredText';
// Styles
import StyledBodycopy from './components/StyledBodycopy';
import StyledBodycopyWrap from './components/StyledBodycopyWrap';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledLayout from './components/StyledLayout';
import StyledSection from './components/StyledSection';
// Props
export interface ContactIndexProps {
  layoutVariant: keyof ContactIndexTheme;
  children: React.ReactNode | React.ReactNode[];
  title?: string;
  body?: any;
  SectionBgTopAsset?: React.ReactNode | React.ReactNode[];
  SectionBgBottomAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgTopAsset?: React.ReactNode | React.ReactNode[];
  ContainerBgBottomAsset?: React.ReactNode | React.ReactNode[];
}

const ContactIndex = ({
  children,
  layoutVariant,
  title,
  body,
  SectionBgTopAsset,
  SectionBgBottomAsset,
  ContainerBgTopAsset,
  ContainerBgBottomAsset
}: ContactIndexProps) => {
  const theme = useTheme();
  const isTitleVisible = theme.ContactIndex[layoutVariant!].config.isTitleVisible;
  const isBodyVisible = theme.ContactIndex[layoutVariant!].config.isBodyVisible;
  return (
    <StyledSection layoutVariant={layoutVariant}>
      {SectionBgTopAsset && SectionBgTopAsset}
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.ContactIndex[layoutVariant!].StyledContainer.isFluid}
      >
        {ContainerBgTopAsset && ContainerBgTopAsset}
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.ContactIndex[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.ContactIndex[layoutVariant!].StyledGrid.withColGapp}
        >
          {title && isTitleVisible && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.ContactIndex[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                <ColoredText text={title} />
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && isBodyVisible && (
            <StyledBodycopyWrap layoutVariant={layoutVariant}>
              <StyledBodycopy
                variant={theme.ContactIndex[layoutVariant!].StyledBodycopyWrap.StyledBodycopy.variant}
                layoutVariant={layoutVariant}
              >
                <PortableText value={body} components={CustomPortableText} />
              </StyledBodycopy>
            </StyledBodycopyWrap>
          )}
          <StyledLayout layoutVariant={layoutVariant}>{children}</StyledLayout>
        </StyledGrid>
        {ContainerBgBottomAsset && ContainerBgBottomAsset}
      </StyledContainer>
      {SectionBgBottomAsset && SectionBgBottomAsset}
    </StyledSection>
  );
};

export default ContactIndex;
