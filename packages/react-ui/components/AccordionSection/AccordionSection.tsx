import type { AccordionSectionTheme } from '@agency-platform/themes';
import { PortableText } from '@portabletext/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import CustomPortableText from '../../utils/portableText';
// Components
import Accordion from '../Accordion';
import AccordionItem from '../AccordionItem';
import Button from '../Button';
// Styles
import StyledAccordion from './components/StyledAccordion';
import StyledAccordionGroup from './components/StyledAccordionGroup';
import StyledAccordionItemBodyWrap from './components/StyledAccordionItemBodyWrap';
import StyledBodycopy from './components/StyledBodycopy';
import StyledBodycopyWrap from './components/StyledBodycopyWrap';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSection from './components/StyledSection';

// Props
export interface AccordionSectionProps {
  data: {
    layoutVariant: keyof AccordionSectionTheme;
    _type: string;
    _key: string;
    variant: string;
    title: string;
    body: any;
    accordionGroup: {
      _type: string;
      _key: string;
      title: string;
      accordion: {
        _type: string;
        _key: string;
        title: string;
        body: any;
      }[];
    }[];
  };
}

const AccordionSection = ({ data }: AccordionSectionProps) => {
  if (!data?.accordionGroup) return null;
  const { accordionGroup, layoutVariant, title, body } = data;
  const theme = useTheme();
  const [activeGroupId, setActiveGroupId] = useState('');
  const [activeDropdownId, setActiveDropdownId] = useState('');

  useEffect(() => {
    setActiveGroupId(accordionGroup[0]?._key);
  }, [accordionGroup]);

  const handleClick = (id: string) => {
    setActiveDropdownId((prev) => (prev === id ? '' : id));
  };

  const handleAccordionGroup = (id: string) => {
    setActiveGroupId(id);
  };
  const isAccordionGroupVisible = theme.AccordionSection[layoutVariant!].config.isAccordionGroupVisible;
  const renderAccordion = () =>
    accordionGroup &&
    accordionGroup.map((item) => {
      const { _key, accordion } = item;
      const activeGroup = _key === activeGroupId;

      return (
        activeGroup &&
        accordion.map((item, index) => {
          const { _key, title, body } = item;
          const isActive = _key === activeDropdownId;
          return (
            <AccordionItem
              key={index}
              variant={theme.AccordionSection[layoutVariant!].StyledAccordion.AccordionItem.variant}
              value={_key}
              triggerButton={
                <Button
                  onClick={() => handleClick(_key)}
                  variant={theme.AccordionSection[layoutVariant!].StyledAccordion.AccordionItem.buttonVariant}
                  withIcon={theme.AccordionSection[layoutVariant!].StyledAccordion.AccordionItem.withIcon}
                  withText={theme.AccordionSection[layoutVariant!].StyledAccordion.AccordionItem.withText}
                  iconName={theme.AccordionSection[layoutVariant!].StyledAccordion.AccordionItem.iconName}
                  isActive={isActive}
                >
                  {title}
                </Button>
              }
            >
              {isActive
                ? body && (
                    <StyledAccordionItemBodyWrap
                      variant={theme.AccordionSection[layoutVariant!].StyledAccordionItemBodyWrap.variant}
                      layoutVariant={layoutVariant}
                    >
                      <PortableText value={body} components={CustomPortableText} />
                    </StyledAccordionItemBodyWrap>
                  )
                : null}
            </AccordionItem>
          );
        })
      );
    });

  const renderAccordioGroup = () =>
    accordionGroup &&
    accordionGroup.map((item, index) => {
      const { _key, title } = item;
      const isActive = _key === activeGroupId;
      return (
        title && (
          <Button
            key={index}
            onClick={() => handleAccordionGroup(_key)}
            variant={theme.AccordionSection[layoutVariant!].StyledAccordionGroup.Button.variant}
            isActive={isActive}
          >
            {title}
          </Button>
        )
      );
    });

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.AccordionSection[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          layoutVariant={layoutVariant}
          withRowGap={theme.AccordionSection[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.AccordionSection[layoutVariant!].StyledGrid.withColGapp}
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
          {body && (
            <StyledBodycopyWrap layoutVariant={layoutVariant}>
              <StyledBodycopy
                variant={theme.AccordionSection[layoutVariant!].StyledBodycopyWrap.StyledBodycopy.variant}
                layoutVariant={layoutVariant}
              >
                <PortableText value={body} components={CustomPortableText} />
              </StyledBodycopy>
            </StyledBodycopyWrap>
          )}
          {isAccordionGroupVisible && (
            <StyledAccordionGroup layoutVariant={layoutVariant}>{renderAccordioGroup()}</StyledAccordionGroup>
          )}
          <StyledAccordion layoutVariant={layoutVariant}>
            <Accordion layoutVariant={'default'}>{renderAccordion()}</Accordion>
          </StyledAccordion>
        </StyledGrid>
      </StyledContainer>
    </StyledSection>
  );
};

export default AccordionSection;
