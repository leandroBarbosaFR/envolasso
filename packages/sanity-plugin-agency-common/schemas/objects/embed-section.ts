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
      title: 'Sub title',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Embed Services',
      name: 'embedServices',
      type: 'common.embedServices'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      image: 'image'
    },
    prepare(selection: { title: string; subtitle: string; image: string }) {
      const { title, subtitle, image } = selection;
      return {
        title: title,
        subtitle: `Embed Section: ${subtitle ? subtitle : 'unknown'}`,
        media: image
      };
    }
  }
});
