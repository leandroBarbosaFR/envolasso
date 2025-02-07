import { seoFields } from '@agency-platform/sanity-plugin-agency-common';
import { FiAlignLeft } from 'react-icons/fi';

interface PortfolioIndexArgs {
  layoutVariantFeaturedPortfolio: { title: string; value: string }[];
}

export default ({ layoutVariantFeaturedPortfolio }: PortfolioIndexArgs) => ({
  name: 'portfolio.index',
  title: 'Portfolio Index',
  type: 'document',
  icon: FiAlignLeft,
  i18n: true,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true
    },
    {
      name: 'carousel',
      title: 'Featured Portfolio Carousel'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      initialValue: 'Portfolio Index',
      group: 'content'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'content',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      hidden: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator');
      }
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      group: 'content',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text'
        }
      ]
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content'
    },
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantFeaturedPortfolio.map(({ title, value }) => ({ title, value }))
      },
      group: 'carousel',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Featured Case Studies',
      name: 'featuredCaseStudie',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'portfolio' }]
        }
      ],
      group: 'carousel'
    },
    {
      title: 'Pagination',
      name: 'paginationCount',
      type: 'number',
      description: 'Pagination: Set the number of results per page. If no value is set the default is 30.',
      group: 'content'
    },
    // SEO
    ...seoFields
  ],
  initialValue: {
    slug: { current: `realisations/page/all/1/latest` }
  },
  preview: {
    select: {
      title: 'title',
      image: 'image',
      locale: '__i18n_lang',
      locales: '__i18n_refs'
    },
    prepare(selection: {
      title: string;
      image: string;
      locale: string;
      locales: { _key: string | number }[];
    }) {
      const { title, locale, locales = [], image } = selection;
      const languages = [locale, ...locales.map(({ _key }) => _key)].join(', ');
      return {
        title: title,
        subtitle: languages,
        media: image
      };
    }
  }
});
