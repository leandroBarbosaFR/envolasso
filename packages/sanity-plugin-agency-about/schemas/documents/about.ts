import { seoFields } from '@agency-platform/sanity-plugin-agency-common';
// import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import slugify from 'slugify';

async function myAsyncSlugifier(input: string, schemaType: any, context: { parent?: any; getClient?: any }) {
  const { getClient } = context;
  const client = getClient({ apiVersion: '2022-12-07' });

  const about = slugify(input, { lower: true });

  const parts: string[] = [about];
  const slug = parts.map((part: string) => slugify(part, { lower: true })).join('/');

  const query = 'count(*[_type=="about" && slug.current == $slug && __i18n_lang == $locale]{_id})';
  const params = { slug, locale: context.parent.__i18n_lang || 'en_GB' };

  return client.fetch(query, params).then((count: number) => {
    if (count) {
      return `${slug}-${count + 1}`;
    }

    return slug;
  });
}

interface AboutArgs {
  commonLayouts: { type: string }[];
}

export default ({ commonLayouts }: AboutArgs) => ({
  name: 'about',
  title: 'À propos',
  type: 'document',
  // icon: HiOutlineDocumentDuplicate,
  i18n: true,
  groups: [
    {
      name: 'pageHeader',
      title: 'En-tête de page',
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
      title: 'Sous-titre',
      name: 'subtitle',
      type: 'string',
      group: 'pageHeader'
    },
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      initialValue: 'About',
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
      title: 'Contenu text',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'pageHeader'
    },
    {
      title: 'Enable Image Background',
      name: 'isImageBgEnabled',
      type: 'boolean',
      group: 'pageHeader'
    },
    {
      title: 'Image Background',
      name: 'imagebg',
      type: 'image',
      hidden: ({ parent }: any) => !parent?.isImageBgEnabled,
      group: 'pageHeader',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Légende'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text'
        }
      ]
    },
    {
      title: 'Image',
      name: 'aboutPageHeaderImage',
      type: 'image',
      group: 'pageHeader',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Légende'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text'
        }
      ]
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
    dynamicRoute: 'about/'
  }
  // preview: {
  //   select: {
  //     title: 'Titre',
  //     image: 'image',
  //     locale: '__i18n_lang',
  //     locales: '__i18n_refs'
  //   },
  //   prepare(selection: {
  //     title: string;
  //     image: string;
  //     locale: string;
  //     locales: { _key: string | number }[];
  //   }) {
  //     const { title, locale, locales = [], image } = selection;
  //     const languages = [locale, ...locales.map(({ _key }) => _key)].join(', ');
  //     return {
  //       title: title,
  //       subtitle: languages,
  //       media: image
  //     };
  //   }
  // }
});
