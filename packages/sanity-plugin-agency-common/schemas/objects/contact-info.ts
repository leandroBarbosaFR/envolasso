interface ConactInfoArgs {
  layoutVariantConactInfo: { title: string; value: string }[];
}

export default ({ layoutVariantConactInfo }: ConactInfoArgs) => ({
  title: 'Contact Info',
  name: 'common.layout.contactInfo',
  type: 'object',
  fields: [
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      options: {
        list: layoutVariantConactInfo.map(({ title, value }) => ({ title, value }))
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
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
      title: 'Offices',
      name: 'offices',
      type: 'array',
      of: [{ type: 'common.layout.textColumn' }]
    }
  ]
  // preview: {
  //   select: {
  //     title: 'Titre',
  //     subtitle: 'subtitle'
  //   },
  //   prepare(selection: { title: string; subtitle: string }) {
  //     const { title, subtitle } = selection;
  //     return {
  //       title: title,
  //       subtitle: `Contact info: ${subtitle ? subtitle : ''}`
  //     };
  //   }
  // }
});
