interface TextImgSectionArgs {
  layoutVariantTextImgSection: { title: string; value: string }[];
}

export default ({ layoutVariantTextImgSection }: TextImgSectionArgs) => ({
  title: 'Text & Image Section',
  name: 'common.layout.textImgSection',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantTextImgSection.map(({ title, value }) => ({ title, value }))
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
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
      title: 'Enable Image Background',
      name: 'isImageBgEnabled',
      type: 'boolean'
    },
    {
      title: 'Image Background',
      name: 'imagebg',
      type: 'image',
      hidden: ({ parent }: any) => !parent?.isImageBgEnabled,
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
      title: 'Enable Content Columns',
      name: 'isContentColumns',
      type: 'boolean'
    },
    {
      title: 'Content Columns',
      name: 'textColumn',
      type: 'array',
      of: [{ type: 'common.layout.textColumn' }],
      hidden: ({ parent }: any) => !parent?.isContentColumns
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
  //     subtitle: 'subtitle',
  //     image: 'image'
  //   },
  //   prepare(selection: { title: string; subtitle: string; image: string }) {
  //     const { title, subtitle, image } = selection;
  //     return {
  //       title: title,
  //       subtitle: `Text & Image Section: ${subtitle ? subtitle : 'unknown'}`,
  //       media: image
  //     };
  //   }
  // }
});
