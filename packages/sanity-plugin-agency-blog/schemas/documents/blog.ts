import {
  filterReferencesByLocale,
  isUniqueAcrossAllLocales,
  seoFields
} from '@agency-platform/sanity-plugin-agency-common';
import { FiAlignLeft } from 'react-icons/fi';
import slugify from 'slugify';

async function asyncSlugifier(input: string, schemaType: string, context: { parent?: any; getClient?: any }) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2022-12-07' });

  const categoryQuery = '*[_type == "blog.category" && _id == $id][0]';
  const categoryQueryParams = {
    id: context.parent.category?._ref || ''
  };
  const category = await client.fetch(categoryQuery, categoryQueryParams);

  const blog = slugify(input, { lower: true });

  const parts: string[] = [...category.slug.current.split('/'), blog];
  const slug = parts.map((part: string) => slugify(part, { lower: true })).join('/');

  const query = 'count(*[_type=="blog" && slug.current == $slug && __i18n_lang == $locale]{_id})';
  const params = { slug, locale: context.parent.__i18n_lang || 'en_GB' };

  return client.fetch(query, params).then((count: number) => {
    if (count) {
      return `${slug}-${count + 1}`;
    }

    return slug;
  });
}

interface BlogArgs {
  commonLayoutsBlog: { type: string }[];
}

export default ({ commonLayoutsBlog }: BlogArgs) => ({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: FiAlignLeft,
  i18n: true,
  groups: [
    {
      name: 'post',
      title: 'Post',
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
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      group: 'post'
    },
    {
      title: 'Price',
      name: 'price',
      type: 'string',
      group: 'post'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'post',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'blog.category' }],
      group: 'post',
      options: {
        filter: filterReferencesByLocale
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Dynamic Route',
      type: 'string',
      name: 'dynamicRoute',
      group: 'post',
      hidden: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator');
      }
    },
    {
      title: 'Slug',
      description: '',
      name: 'slug',
      type: 'slug',
      group: 'post',
      options: {
        source: 'title',
        slugify: asyncSlugifier,
        isUnique: (slug, context) => isUniqueAcrossAllLocales(slug, context, 'blogs')
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Feature Image',
      name: 'image',
      type: 'image',
      group: 'post',
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
      group: 'post'
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }],
      group: 'post'
    },
    {
      title: 'Media Type',
      name: 'postMedoiaVariant',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' }
        ]
      },
      group: 'content'
      // validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Image',
      name: 'heroImage',
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
      ],
      hidden: ({ parent }: any) => parent?.postMedoiaVariant !== 'image'
    },
    {
      title: 'Embed Services',
      name: 'embedServices',
      type: 'common.embedServices',
      group: 'content',
      hidden: ({ parent }: any) => parent?.postMedoiaVariant !== 'video'
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'array',
      of: commonLayoutsBlog.map(({ type }) => ({ type })),
      group: 'content'
    },
    ...seoFields
  ],
  initialValue: {
    dynamicRoute: 'blogs/post/'
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
