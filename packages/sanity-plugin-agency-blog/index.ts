import { definePlugin } from 'sanity';
import blog from './schemas/documents/blog';
import blogs from './schemas/documents/blog-index';
import category from './schemas/documents/category';

interface AgencyBlogPluginArgs {
  layoutVariantFeaturedBlogPosts: { title: string; value: string }[];
  commonLayoutsBlog: { type: string }[];
}

const agencyBlog = definePlugin(
  ({ layoutVariantFeaturedBlogPosts, commonLayoutsBlog }: AgencyBlogPluginArgs) => ({
    schema: {
      types: [blogs({ layoutVariantFeaturedBlogPosts }), blog({ commonLayoutsBlog }), category]
    }
  })
);

export default agencyBlog;
