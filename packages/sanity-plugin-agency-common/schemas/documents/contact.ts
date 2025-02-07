import { isUniqueAcrossAllLocales } from '@agency-platform/sanity-plugin-agency-common';
import { FiUsers } from 'react-icons/fi';
import seoFields from '../../utils/seo-fields';

interface ContactArgs {
  commonLayoutsContact: { type: string }[];
  layoutVariantPageHeader: { title: string; value: string }[];
}

export default ({ commonLayoutsContact, layoutVariantPageHeader }: ContactArgs) => ({
  name: 'contact',
  title: 'Contact',
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
      title: 'Page Header Layout Variant',
      name: 'layoutVariantPageHeader',
      type: 'string',
      options: {
        list: layoutVariantPageHeader.map(({ title, value }) => ({ title, value }))
      },
      group: 'pageHeader',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
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
      initialValue: 'Contact',
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      group: 'pageHeader'
    },
    {
      title: 'Slug',
      description: '',
      name: 'slug',
      type: 'slug',
      hidden: ({ currentUser }) => {
        return !currentUser.roles.find(({ name }) => name === 'administrator');
      },
      validation: (Rule: { required: () => boolean }) => Rule.required(),
      options: {
        isUnique: (slug: string, context: any) => isUniqueAcrossAllLocales(slug, context, 'contact')
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
      title: 'Call to Action (CTA) title',
      name: 'ctaTitle',
      type: 'string',
      group: 'pageHeader'
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [
        { type: 'common.externalLink' },
        { type: 'common.internalLink' },
        { type: 'common.emailLink' },
        { type: 'common.telLink' },
        { type: 'common.linkedInLink' }
      ],
      group: 'pageHeader'
    },

    {
      title: 'Layout',
      name: 'layout',
      type: 'array',
      of: commonLayoutsContact.map(({ type }) => ({ type })),
      group: 'layout'
    },
    // SEO
    ...seoFields
  ],
  initialValue: {
    slug: { current: `contact` }
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
