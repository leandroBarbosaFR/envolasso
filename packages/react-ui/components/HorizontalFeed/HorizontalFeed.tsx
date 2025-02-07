// @ts-nocheck
// @ts-ignore
import React, { useRef } from 'react';
import useDragScroll from '../../hooks/useDragScroll';
import useMouseWheelScroll from '../../hooks/useMouseWheelScroll';
// Themes
import { useTheme } from 'styled-components';
import { HorizontalFeedTheme } from '@agency-platform/themes';
import { Portfolio } from '@agency-platform/shared-types';
// Components

import PortfolioFeedItem from '../PortfolioFeedItem';

// Styles
import HorizontalFeedBtn from './components/HorizontalFeedBtn';
import StyledFeedGrid from './components/StyledFeedGrid';

export interface HorizontalFeedProps {
  layoutVariant: keyof HorizontalFeedTheme;
  data?: Portfolio[] | Blog[] | Pricing[] | { id: string }[];
  type: string;
  artUrl?: string;
  feedItemComponent?: string;
  children?: React.ReactNode;
  iconOptions?: string[];
  menuOptions?:
    | {
        title: string;
        name: string;
      }[]
    | null;
  withArrowButton?: boolean;
}

const HorizontalFeed = ({
  layoutVariant,
  data,
  type,
  artUrl,
  feedItemComponent,
  iconOptions,
  menuOptions,
  withArrowButton = true
}: HorizontalFeedProps) => {
  const theme = useTheme();
  const feedRef = useRef<HTMLDivElement>(null);
  useDragScroll(feedRef);

  const renderFeed = () => {
    switch (type) {
      case 'portfolioFeed':
        return (
          data &&
          data.map((item: any, index: React.Key) => {
            return (
              <PortfolioFeedItem
                key={index}
                layoutVariant={'default'}
                slug={item?.slug}
                subtitle={item?.subtitle}
                title={item?.title}
                excerpt={item?.excerpt}
                featureImage={item?.featureImage}
                postMedoiaVariant={item?.postMedoiaVariant}
                embedServices={item?.embedServices}
                dynamicRoute={item?.dynamicRoute}
                feedItemComponent={feedItemComponent}
                isHorizontalFeed={true}
              />
            );
          })
        );
      case 'postFeed':
        return (
          data &&
          data.map((item: any, index: React.Key) => {
            return (
              <PostFeedItem
                key={index}
                layoutVariant={'default'}
                title={item?.title}
                excerpt={item?.excerpt}
                featureImage={item?.image}
                slug={item?.slug}
                dynamicRoute={item?.dynamicRoute}
                isHorizontalFeed={true}
                feedItemComponent={feedItemComponent}
                createdAt={item?._createdAt}
                price={item?.price}
                body={item?.body}
                subtitle={item?.subtitle}
              />
            );
          })
        );
      default:
        return null;
    }
  };

  return (
    <>
      <StyledFeedGrid layoutVariant={layoutVariant} isHorizontalFeed={true} ref={feedRef}>
        {renderFeed()}
      </StyledFeedGrid>
      {withArrowButton && <HorizontalFeedBtn layoutVariant={layoutVariant} feedRef={feedRef} />}
    </>
  );
};

export default HorizontalFeed;
