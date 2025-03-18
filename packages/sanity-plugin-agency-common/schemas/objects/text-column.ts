export default {
  title: 'Text Column',
  name: 'common.layout.textColumn',
  type: 'object',
  fields: [
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
      title: 'Enable Image',
      name: 'isImageEnabled',
      type: 'boolean'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      hidden: ({ parent }: any) => !parent?.isImageEnabled,
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
      title: 'Contenu text',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
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
  //     subtitle: 'credit',
  //     image: 'image'
  //   },
  //   prepare(selection: { title: string; subtitle: string; image: string }) {
  //     const { title, subtitle, image } = selection;
  //     return {
  //       title: title,
  //       subtitle: `${subtitle ? subtitle : 'unknown'}`,
  //       media: image
  //     };
  //   }
  // }
};
