import { filterReferencesByLocale } from '../../utils';

interface BlogFeedArgs {
  layoutVariantBlogFeed: { title: string; value: string }[];
}

export default ({ layoutVariantBlogFeed }: BlogFeedArgs) => ({
  title: 'Blog Feed',
  name: 'common.layout.blogFeed',
  type: 'object',
  fieldsets: [
    { name: 'settings', title: 'Settings', collapsible: true, columns: 2 },
    { name: 'content', title: 'Content', collapsible: true }
  ],
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantBlogFeed.map(({ title, value }) => ({ title, value }))
      },
      fieldset: 'settings',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Feed Type',
      name: 'feedType',
      type: 'string',
      options: {
        list: [
          // {title: 'Latest', value: 'latest'},
          { title: 'Created', value: 'created' }
        ]
      },
      fieldset: 'settings',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Feed Style',
      name: 'feedStyle',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Carousel', value: 'carousel' }
        ]
      },
      fieldset: 'settings',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Sous-titre',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Titre',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Contenu text',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Posts',
      name: 'posts',
      type: 'array',
      // hidden: ({parent}: any) => parent?.type !== 'created',
      of: [
        {
          type: 'reference',
          name: 'post',
          title: 'post',
          to: [{ type: 'blog' }],
          options: {
            filter: filterReferencesByLocale
          }
        }
      ],
      hidden: ({ parent }: any) => parent?.feedType !== 'created'
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }],
      fielset: 'content'
    }
  ],
  initialValue: {
    layoutVariant: `default`,
    feedType: 'created',
    feedStyle: 'grid'
  }
  // preview: {
  //   select: {
  //     title: 'Titre',
  //     feedStyle: 'feedStyle',
  //     subtitle: 'subtitle'
  //   },
  //   prepare(selection: { title: string; subtitle: string; feedStyle: string }) {
  //     const { title, subtitle, feedStyle } = selection;
  //     return {
  //       title: title,
  //       subtitle: `Blog Feed (${feedStyle ? feedStyle : ''}): ${subtitle ? subtitle : ''}`
  //     };
  //   }
  // }
});
