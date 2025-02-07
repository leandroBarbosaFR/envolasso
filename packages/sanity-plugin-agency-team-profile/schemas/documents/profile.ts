import {
  filterReferencesByLocale,
  isUniqueAcrossAllLocales,
  seoFields
} from '@agency-platform/sanity-plugin-agency-common';
import { FiUsers } from 'react-icons/fi';
import slugify from 'slugify';

async function asyncSlugifier(input: string, context: { parent?: any; getClient?: any }) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2022-12-07' });

  const categoryQuery = '*[_type == "teamProfile.category" && _id == $id][0]';
  const categoryQueryParams = {
    id: context.parent.category?._ref || ''
  };
  const category = await client.fetch(categoryQuery, categoryQueryParams);

  const teamProfile = slugify(input, { lower: true });

  const parts: string[] = [...category.slug.current.split('/'), teamProfile];
  const slug = parts.map((part: string) => slugify(part, { lower: true })).join('/');

  const query = 'count(*[_type=="teamProfile" && slug.current == $slug && __i18n_lang == $locale]{_id})';
  const params = { slug, locale: context.parent.__i18n_lang || 'en_GB' };

  return client.fetch(query, params).then((count: number) => {
    if (count) {
      return `${slug}-${count + 1}`;
    }

    return slug;
  });
}

export default {
  name: 'teamProfile',
  title: 'Team Profile',
  type: 'document',
  icon: FiUsers,
  i18n: true,
  groups: [
    {
      name: 'profile',
      title: 'Profile',
      default: true
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
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      group: 'profile'
    },
    {
      title: 'Category',
      description: '',
      name: 'category',
      type: 'reference',
      to: [{ type: 'teamProfile.category' }],
      options: {
        filter: filterReferencesByLocale
      },
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      group: 'profile'
    },
    {
      title: 'Dynamic Route',
      type: 'string',
      name: 'dynamicRoute',
      group: 'profile',
      hidden: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator');
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
        slugify: asyncSlugifier,
        isUnique: (slug: any, context: any) => isUniqueAcrossAllLocales(slug, context, 'composers')
      },
      group: 'profile'
    },
    {
      title: 'Feature Image',
      name: 'image',
      type: 'image',
      group: 'profile',
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
      title: 'Feature Image effect',
      name: 'imageEffect',
      type: 'image',
      group: 'profile',
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
      title: 'Position',
      name: 'position',
      type: 'string',
      group: 'profile'
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 4,
      group: 'profile',
      description: 'Short excerpt of main bio...'
    },
    {
      title: 'Bio',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'profile'
    },
    {
      title: 'Contact Links',
      name: 'contactLinks',
      type: 'array',
      of: [
        { type: 'common.internalLink' },
        { type: 'common.externalLink' },
        { type: 'common.emailLink' },
        { type: 'common.linkedInLink' },
        { type: 'common.telLink' }
      ],
      group: 'profile'
    },
    ...seoFields
  ],
  initialValue: {
    dynamicRoute: 'team/'
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
};
