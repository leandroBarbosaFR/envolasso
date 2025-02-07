import { isUniqueAcrossAllLocales, seoFields } from '@agency-platform/sanity-plugin-agency-common';
import { FiFolder } from 'react-icons/fi';
import slugify from 'slugify';

async function asyncSlugifier(input: string, schemaType: any, context: { parent?: any; getClient?: any }) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2022-12-07' });

  const category = slugify(input, { lower: true });

  const parts: string[] = [category];
  const slug = parts.map((part: string) => slugify(part, { lower: true })).join('/');

  const query = 'count(*[_type=="blog.category" && slug.current == $slug && __i18n_lang == $locale]{_id})';
  const params = { slug, locale: context.parent.__i18n_lang || 'en_GB' };

  return client.fetch(query, params).then((count: number) => {
    if (count) {
      return `${slug}-${count + 1}`;
    }

    return slug;
  });
}

export default {
  name: 'blog.category',
  title: 'Blog Category',
  type: 'document',
  icon: FiFolder,
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
      title: 'Price',
      name: 'price',
      type: 'string',
      group: 'content'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (Rule: { required: () => boolean }) => Rule.required()
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
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        slugify: asyncSlugifier,
        isUnique: (slug, context) => isUniqueAcrossAllLocales(slug, context, 'blog.category')
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
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
    ...seoFields
  ],
  initialValue: {
    dynamicRoute: 'blogs/page/'
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
