interface EmbedSectionArgs {
  layoutVariantEmbedSection: { title: string; value: string }[];
}

export default ({ layoutVariantEmbedSection }: EmbedSectionArgs) => ({
  title: 'Embed Section',
  name: 'common.layout.embedSection',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantEmbedSection.map(({ title, value }) => ({ title, value }))
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
      title: 'Contenu text',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Embed Services',
      name: 'embedServices',
      type: 'common.embedServices'
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
  //       subtitle: `Embed Section: ${subtitle ? subtitle : 'unknown'}`,
  //       media: image
  //     };
  //   }
  // }
});
