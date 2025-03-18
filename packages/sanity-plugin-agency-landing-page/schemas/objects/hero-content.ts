export default {
  title: 'Slide',
  name: 'hero.content',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
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
        },
        {
          name: 'isBackgroundImage',
          type: 'boolean',
          title: 'Set as Background'
        }
      ]
    },
    {
      title: 'Sous-titre',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Titre',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Stand first',
      name: 'standFirst',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }]
    }
  ]
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
};
