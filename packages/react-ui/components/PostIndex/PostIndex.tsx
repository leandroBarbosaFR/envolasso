import React from 'react';
import { PostIndexTheme } from '@agency-platform/themes';
// import { useFlexConfig } from '@agency-platform/react-ui';
import { Blog } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
// import { Pagination } from '../Pagination';
import PostFeedItem from '../PostFeedItem';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledNotFound from './components/StyledNotFound';
import StyledSection from './components/StyledSection';

// Props
export interface PostIndexProps {
  layoutVariant: keyof PostIndexTheme;
  pageName: string;
  data: Blog[];
  postsCount: number;
  urlPageNumber: number;
  perPage: number;
  feedItemComponent?: string;
}

const PostIndex = ({
  layoutVariant,
  pageName,
  data,
  postsCount,
  urlPageNumber,
  perPage,
  feedItemComponent
}: PostIndexProps) => {
  const theme = useTheme();
  // const { translation } = useFlexConfig();

  const renderPost = () =>
    data &&
    data.map((item, index) => {
      const { title, slug, excerpt, featureImage, dynamicRoute } = item;
      return (
        <PostFeedItem
          key={index}
          layoutVariant={layoutVariant}
          title={title}
          slug={slug}
          excerpt={excerpt}
          featureImage={featureImage}
          dynamicRoute={dynamicRoute}
          feedItemComponent={feedItemComponent}
          body={undefined}
        />
      );
    });

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.PostIndex[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          withRowGap={theme.PostIndex[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.PostIndex[layoutVariant!].StyledGrid.withColGapp}
          layoutVariant={layoutVariant}
        >
          {renderPost()}
          {data?.length > 0 ? null : (
            <StyledNotFound
              as={'h4'}
              variant={theme.PostIndex[layoutVariant!].StyledNotFound.variant}
              layoutVariant={layoutVariant}
            >
              No Posts found
            </StyledNotFound>
          )}
        </StyledGrid>
        {/* {data?.length > 0 && (
          <Pagination
            layoutVariant={'default'}
            pageName={pageName}
            totalCount={postsCount}
            siblingCount={1}
            pageSize={perPage}
            urlPageNumber={urlPageNumber}
          />
        )} */}
      </StyledContainer>
    </StyledSection>
  );
};

export default PostIndex;
