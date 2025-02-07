import React from 'react';
import { useTheme } from 'styled-components';
import { PortableText } from '@portabletext/react';
import { AddressListTheme } from '@agency-platform/themes';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledAddress from './components/StyledAddress';
import StyledAddressList from './components/StyledAddressList';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledHeading from './components/StyledHeading';
import StyledArticle from './components/StyledArticle';
import StyledSection from './components/StyledSection';
import StyledAddressTitle from './components/StyledAddressTitle';
import StyledAddressArticle from './components/StyledAddressArticle';
import { CustomPortableText } from '../../utils';

// Props
interface AdressListProps {
  data: {
    layoutVariant: keyof AddressListTheme;
    _type: string;
    _key: string;
    title: string;
    body: any;
    offices: {
      _type: string;
      _key: string;
      variant: string;
      title: string;
      body: any;
    }[];
  };
}

const AddressList = ({ data }: AdressListProps) => {
  if (!data) return null;
  const layoutVariant = 'default';
  const { title, body, offices } = data;
  const theme = useTheme();

  const renderAdressList = () =>
    offices &&
    offices.map((item, index) => {
      const { title, body } = item;

      return (
        <StyledAddress key={index} variant={'bodyCopy'} layoutVariant={layoutVariant}>
          {title && (
            <StyledAddressTitle
              as={'h4'}
              variant={theme.AddressList[layoutVariant!].StyledAddressTitle.variant}
              layoutVariant={layoutVariant}
            >
              {title}
            </StyledAddressTitle>
          )}
          {body && (
            <StyledAddressArticle
              layoutVariant={layoutVariant}
              variant={theme.AddressList[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledAddressArticle>
          )}
        </StyledAddress>
      );
    });

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.AddressList[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.AddressList[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.AddressList[layoutVariant!].StyledGrid.withColGapp}
        >
          {title && (
            <StyledHeadingWrap layoutVariant={layoutVariant}>
              <StyledHeading
                as={'h3'}
                layoutVariant={layoutVariant}
                variant={theme.AddressList[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
              >
                {title}
              </StyledHeading>
            </StyledHeadingWrap>
          )}
          {body && (
            <StyledArticle
              layoutVariant={layoutVariant}
              variant={theme.AddressList[layoutVariant!].StyledArticle.variant}
            >
              <PortableText value={body} components={CustomPortableText} />
            </StyledArticle>
          )}
          <StyledAddressList
            layoutVariant={layoutVariant}
            withRowGap={theme.AddressList[layoutVariant!].StyledAddressList.withRowGap}
            withColGapp={theme.AddressList[layoutVariant!].StyledAddressList.withColGapp}
          >
            {renderAdressList()}
          </StyledAddressList>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default AddressList;
