import { filterReferencesByLocale } from '../../utils';

interface PortfolioFeedArgs {
  layoutVariantPortfolioFeed: { title: string; value: string }[];
}

export default ({ layoutVariantPortfolioFeed }: PortfolioFeedArgs) => ({
  title: 'Portfolio Feed',
  name: 'common.layout.portfolioFeed',
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
        list: layoutVariantPortfolioFeed.map(({ title, value }) => ({ title, value }))
      },
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
      title: 'Case Studies',
      name: 'portfolios',
      type: 'array',
      of: [
        {
          title: 'Case Study',
          name: 'portfolio',
          type: 'reference',
          to: [{ type: 'portfolio' }],
          options: {
            filter: filterReferencesByLocale
          }
        }
      ]
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
  //       subtitle: `portfolio Feed (${feedStyle ? feedStyle : ''}): ${subtitle ? subtitle : ''}`
  //     };
  //   }
  // }
});
