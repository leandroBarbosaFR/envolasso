import React from 'react';
import Link from 'next/link';
import type { PortfolioIndexTheme } from '@agency-platform/themes';
import type { Blog } from '@agency-platform/shared-types';
import { Portfolio } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import Pagination from '../Pagination';
import { ImageTag } from '../ImageTag';
import PortfolioFeedItem from '../PortfolioFeedItem';
// Styles
import StyledPortfolioFeedItem from './components/StyledPortfolioFeedItem';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledNotFound from './components/StyledNotFound';
import StyledSection from './components/StyledSection';

// Props
export interface PortfolioIndexProps {
  layoutVariant: keyof PortfolioIndexTheme;
  pageName: string;
  data: Portfolio[];
  portfolio: Blog[];
  portfolioCount: number;
  portfoliosCount: number;
  perPage: number;
  urlPageNumber: number;
  feedItemComponent?: string;
}

const PortfolioIndex = ({
  layoutVariant,
  pageName,
  data,
  portfolio,
  portfoliosCount,
  portfolioCount,
  perPage,
  urlPageNumber,
  feedItemComponent
}: PortfolioIndexProps) => {
  const theme = useTheme();

  const renderPost = () =>
    data &&
    data.map((item, index) => {
      const {
        title,
        subtitle,
        slug,
        excerpt,
        body,
        featureImage,
        dynamicRoute,
        postMedoiaVariant,
        embedServices
      } = item;

      return (
        <PortfolioFeedItem
          key={index}
          layoutVariant={layoutVariant}
          slug={slug}
          title={title}
          subtitle={subtitle}
          excerpt={excerpt}
          body={body}
          featureImage={featureImage}
          postMedoiaVariant={postMedoiaVariant}
          embedServices={embedServices}
          dynamicRoute={dynamicRoute}
          feedItemComponent={feedItemComponent}
          isHorizontalFeed={false}
        />
      );
    });

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PortfolioIndex[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          withRowGap={theme.PortfolioIndex[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PortfolioIndex[layoutVariant!].StyledGrid.withColGapp}
          layoutVariant={layoutVariant}
        >
          {renderPost()}
          {data?.length > 0 ? null : (
            <StyledNotFound
              as={'h4'}
              variant={theme.PortfolioIndex[layoutVariant!].StyledNotFound.variant}
              layoutVariant={layoutVariant}
            >
              No Posts found
            </StyledNotFound>
          )}
        </StyledGrid>
        {data?.length > 10 && (
          <Pagination
            layoutVariant={'default'}
            pageName={pageName}
            totalCount={portfoliosCount}
            siblingCount={1}
            pageSize={perPage}
            urlPageNumber={urlPageNumber}
          />
        )}
      </StyledContainer>
    </StyledSection>
  );
};

export default PortfolioIndex;
