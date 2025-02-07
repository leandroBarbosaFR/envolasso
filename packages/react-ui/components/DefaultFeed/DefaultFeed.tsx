// @ts-nocheck
// @ts-ignore
import React from 'react';
// Theme
import { useTheme } from 'styled-components';
import { DefaultFeedTheme } from '@agency-platform/themes';
import { Portfolio } from '@agency-platform/shared-types';
// Components
import PortfolioFeedItem from '../PortfolioFeedItem';
import PostFeedItem from '../PostFeedItem';
// Styles
import StyledFeedGrid from './components/StyledFeedGrid';
// Props
export interface DefaultFeedProps {
  layoutVariant: keyof DefaultFeedTheme;
  type: string;
  data: Portfolio[] | Blog[] | { id: string }[];
  artUrl?: string;
  feedItemComponent?: string;
  iconOptions?: string[];
  menuOptions?:
    | {
        title: string;
        name: string;
      }[]
    | null;
}

const DefaultFeed = ({
  layoutVariant,
  data,
  type,
  artUrl,
  feedItemComponent,
  iconOptions,
  menuOptions
}: DefaultFeedProps) => {
  const theme = useTheme();

  const renderFeed = () => {
    switch (type) {
      case 'portfolioFeed':
        return (
          data &&
          data.map((item: any, index: React.Key) => {
            return (
              <PortfolioFeedItem
                key={index}
                layoutVariant={layoutVariant}
                slug={item?.slug}
                subtitle={item?.subtitle}
                title={item?.title}
                excerpt={item?.excerpt}
                featureImage={item?.featureImage}
                postMedoiaVariant={item?.postMedoiaVariant}
                embedServices={item?.embedServices}
                dynamicRoute={item?.dynamicRoute}
                feedItemComponent={feedItemComponent}
                isHorizontalFeed={false}
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
                layoutVariant={layoutVariant}
                title={item?.title}
                slug={item?.slug}
                excerpt={item?.excerpt}
                featureImage={item?.image}
                dynamicRoute={item?.dynamicRoute}
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
    <StyledFeedGrid
      withRowGap={theme.DefaultFeed[layoutVariant!].StyledFeedGrid.withRowGap}
      withColGapp={theme.DefaultFeed[layoutVariant!].StyledFeedGrid.withColGapp}
      layoutVariant={layoutVariant}
    >
      {renderFeed()}
    </StyledFeedGrid>
  );
};

export default DefaultFeed;
