import { FiUsers } from 'react-icons/fi';
import slugify from 'slugify';
import seoFields from '../../utils/seo-fields';

async function myAsyncSlugifier(input, schemaType, context) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2022-12-07' });

  const page = slugify(input, { lower: true });

  const parts: string[] = [page];
  const slug = parts.map((part: string) => slugify(part, { lower: true })).join('/');

  const query = 'count(*[_type=="page" && slug.current == $slug && __i18n_lang == $locale]{_id})';
  const params = { slug, locale: context.parent.__i18n_lang || 'en_GB' };

  return client.fetch(query, params).then((count: number) => {
    if (count) {
      return `${slug}-${count + 1}`;
    }

    return slug;
  });
}

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FiUsers,
  i18n: true,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true
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
      group: 'content'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      group: 'content'
    },
    {
      title: 'Dynamic Route',
      type: 'string',
      name: 'dynamicRoute',
      group: 'content',
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
        slugify: myAsyncSlugifier
      },
      group: 'content'
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
      title: 'Address',
      name: 'address',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content'
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [
        { type: 'common.externalLink' },
        { type: 'common.internalLink' },
        { type: 'common.emailLink' },
        { type: 'common.telLink' }
      ],
      group: 'content'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'common.htmlField' }],
      group: 'content'
    },
    // SEO
    ...seoFields
  ],
  initialValue: {
    dynamicRoute: 'pages/'
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
