import { seoFields } from '@agency-platform/sanity-plugin-agency-common';

export default {
  name: 'teamProfile.index',
  title: 'Team Profile Index',
  type: 'document',
  i18n: true,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true
    },
    {
      name: 'teamProfileList',
      title: 'Team Profile List'
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
    // {
    //   title: 'Layout Variant',
    //   name: 'layoutVariant',
    //   type: 'string',
    //   options: {
    //     list: [{title: 'Default', value: 'default'}],
    //   },
    //   group: 'teamProfileList',
    //   validation: (Rule: {required: () => boolean}) => Rule.required(),
    // },
    {
      title: 'Team Profiles',
      name: 'teamProfileList',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamProfile' }]
        }
      ],
      group: 'teamProfileList'
    },
    {
      title: 'Pagination',
      name: 'paginationCount',
      type: 'number',
      description: 'Pagination: Set the number of results per page. If no value is set the default is 30.',
      group: 'content'
    },
    ...seoFields
  ],
  initialValue: {
    slug: { current: `team` }
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
