import {
  filterReferencesByLocale,
  isUniqueAcrossAllLocales,
  seoFields
} from '@agency-platform/sanity-plugin-agency-common';
import { FiAlignLeft } from 'react-icons/fi';
import slugify from 'slugify';

async function asyncSlugifier(
  input: string,
  schemaType: string,
  context: { parent?: any; getClient?: any },
  defaultLocale: string
) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2022-12-07' });

  const categoryQuery = '*[_type == "portfolio.category" && _id == $id][0]';
  const categoryQueryParams = {
    id: context.parent.category?._ref || ''
  };
  const category = await client.fetch(categoryQuery, categoryQueryParams);

  const portfolio = slugify(input, { lower: true });

  const parts: string[] = [...category.slug.current.split('/'), portfolio];
  const slug = parts.map((part: string) => slugify(part, { lower: true })).join('/');

  const query = 'count(*[_type=="portfolio" && slug.current == $slug && __i18n_lang == $locale]{_id})';
  const params = { slug, locale: context.parent.__i18n_lang || defaultLocale || 'en_GB' };

  return client.fetch(query, params).then((count: number) => {
    if (count) {
      return `${slug}-${count + 1}`;
    }

    return slug;
  });
}

interface PortfolioArgs {
  defaultLocale: string;
  commonLayoutsPortfolio: { type: string }[];
}

export default ({ defaultLocale, commonLayoutsPortfolio }: PortfolioArgs) => ({
  name: 'portfolio',
  title: 'Case Study',
  type: 'document',
  icon: FiAlignLeft,
  i18n: true,
  groups: [
    {
      name: 'caseStudy',
      title: 'Case Study',
      default: true
    },
    {
      name: 'postMedoia',
      title: 'Post Media'
    },
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'layout',
      title: 'Content Layouts'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    {
      title: 'Sub title',
      name: 'subtitle',
      type: 'string',
      group: 'caseStudy'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      group: 'caseStudy'
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'portfolio.category' }],
      options: {
        filter: (document: any) => filterReferencesByLocale({ document })
      },
      group: 'caseStudy',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Dynamic Route',
      type: 'string',
      name: 'dynamicRoute',
      readOnly: true,
      group: 'caseStudy',
      hidden: ({ currentUser }: { currentUser: any }) => {
        return !currentUser.roles.find(({ name }: { name: string }) => name === 'administrator');
      }
    },
    {
      title: 'Slug',
      description: '',
      name: 'slug',
      type: 'slug',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      options: {
        source: 'title',
        slugify: (input: string, schemaType: string, context: { parent?: any; getClient?: any }) =>
          asyncSlugifier(input, schemaType, context, defaultLocale),
        isUnique: (slug: string, context: any) => isUniqueAcrossAllLocales(slug, context, 'artists')
      },
      group: 'caseStudy'
    },
    {
      title: 'Enable Image Banner',
      name: 'isImageBanner',
      type: 'boolean',
      group: 'caseStudy'
    },
    {
      title: 'Image Banner',
      name: 'imageBanner',
      type: 'image',
      group: 'caseStudy',
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
      ],
      hidden: ({ parent }: any) => !parent?.isImageBanner
    },
    {
      title: 'Feature Image',
      name: 'image',
      type: 'image',
      group: 'caseStudy',
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
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 4,
      group: 'caseStudy',
      description: 'Short excerpt of main bio...'
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }],
      group: 'caseStudy'
    },
    {
      title: 'Media Type',
      name: 'postMedoiaVariant',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image', default: true },
          { title: 'Video', value: 'video' }
        ]
      },
      group: 'content',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Image',
      name: 'heroImage',
      type: 'image',
      group: 'content',
      hidden: ({ parent }: any) => parent?.postMedoiaVariant !== 'image',
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
      title: 'Embed Services',
      name: 'embedServices',
      type: 'common.embedServices',
      group: 'content',
      hidden: ({ parent }: any) => parent?.postMedoiaVariant !== 'video'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
      group: 'content'
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'array',
      of: commonLayoutsPortfolio.map(({ type }) => ({ type })),
      group: 'content'
    },
    ...seoFields
  ],
  initialValue: {
    dynamicRoute: 'portfolios/case-study/'
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
