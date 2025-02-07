import React from 'react';
import Link from 'next/link';
import type { BlogIndexTheme } from '@agency-platform/themes';
import type { Blog } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import Pagination from '../Pagination';
import { ImageTag } from '../ImageTag';
// Styles
import StyledSection from './components/StyledSection';
import StyledContainer from './components/StyledContainer';
import StyledGrid from './components/StyledGrid';
import StyledNotFound from './components/StyledNotFound';
import StyledBlogFeedItem from './components/StyledBlogFeedItem';

// Props
export interface BlogIndexProps {
  layoutVariant: keyof BlogIndexTheme;
  pageName: string;
  blog: Blog[];
  blogCount: number;
  perPage: number;
  urlPageNumber: number;
}

const BlogIndex = ({ layoutVariant, pageName, blog, blogCount, perPage, urlPageNumber }: BlogIndexProps) => {
  const theme = useTheme();

  const renderBlog = () =>
    blog &&
    blog.map((item) => {
      const { _id, title, slug, excerpt, featureImage, dynamicRoute } = item;
      const imageSrc = featureImage?.asset?.url;
      const blurDataURL = featureImage?.asset?.metadata?.lqip;
      const fallbackImgSrc = '/fallbackImg.svg';

      return (
        <StyledBlogFeedItem key={_id} layoutVariant={layoutVariant}>
          <ImageTag
            layoutVariant={'responsive'}
            src={imageSrc}
            fallbackImgSrc={fallbackImgSrc}
            blurDataURL={blurDataURL}
            alt={featureImage?.alt}
            caption={featureImage?.caption}
            width={200}
            height={200}
            priority={false}
            fill={false}
            placeholder={'blur'}
          />
          <Link href={`/${dynamicRoute}${slug?.current}`}>{title}</Link>
          {excerpt && <article>{excerpt}</article>}
        </StyledBlogFeedItem>
      );
    });

  return (
    <StyledSection layoutVariant={layoutVariant}>
      <StyledContainer
        layoutVariant={layoutVariant}
        isFluid={theme.BlogIndex[layoutVariant!].StyledContainer.isFluid}
      >
        <StyledGrid
          withRowGap={theme.BlogIndex[layoutVariant!].StyledGrid.withRowGap}
          withColGapp={theme.BlogIndex[layoutVariant!].StyledGrid.withColGapp}
          layoutVariant={layoutVariant}
        >
          {blog?.length > 0 ? (
            renderBlog()
          ) : (
            <StyledNotFound
              as={'h4'}
              variant={theme.BlogIndex[layoutVariant!].StyledNotFound.variant}
              layoutVariant={layoutVariant}
            >
              No blogs found
            </StyledNotFound>
          )}
        </StyledGrid>
        {blog?.length > 2 && (
          <Pagination
            layoutVariant={'default'}
            pageName={pageName}
            totalCount={blogCount}
            siblingCount={1}
            pageSize={perPage}
            urlPageNumber={urlPageNumber}
          />
        )}
      </StyledContainer>
    </StyledSection>
  );
};

export default BlogIndex;
