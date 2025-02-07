import { seoFields } from '@agency-platform/sanity-plugin-agency-common';
import { FiUsers } from 'react-icons/fi';
import slugify from 'slugify';

async function myAsyncSlugifier(input: string, schemaType: any, context: { parent?: any; getClient?: any }) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2022-12-07' });

  const service = slugify(input, { lower: true });

  const parts: string[] = [service];
  const slug = parts.map((part: string) => slugify(part, { lower: true })).join('/');

  const query = 'count(*[_type=="service" && slug.current == $slug && __i18n_lang == $locale]{_id})';
  const params = { slug, locale: context.parent.__i18n_lang || 'en_GB' };

  return client.fetch(query, params).then((count: number) => {
    if (count) {
      return `${slug}-${count + 1}`;
    }

    return slug;
  });
}

interface ServicesArgs {
  commonLayouts: { type: string }[];
}

export default ({ commonLayouts }: ServicesArgs) => ({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: FiUsers,
  i18n: true,
  groups: [
    {
      name: 'pageHeader',
      title: 'Page Header',
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
      title: 'Sub title',
      name: 'subtitle',
      type: 'string',
      group: 'pageHeader'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      group: 'pageHeader'
    },
    {
      title: 'Dynamic Route',
      type: 'string',
      name: 'dynamicRoute',
      group: 'pageHeader',
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
      group: 'pageHeader'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      group: 'pageHeader',
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
      group: 'pageHeader'
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }],
      group: 'pageHeader'
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'array',
      of: commonLayouts.map(({ type }) => ({ type })),
      group: 'layout'
    },
    // SEO
    ...seoFields
  ],
  initialValue: {
    dynamicRoute: 'services/'
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
