interface TextSectionAsideArgs {
  layoutVariantTextSectionAside: { title: string; value: string }[];
}

export default ({ layoutVariantTextSectionAside }: TextSectionAsideArgs) => ({
  title: 'Text Section with aside',
  name: 'common.layout.textSectionAside',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantTextSectionAside.map(({ title, value }) => ({ title, value }))
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
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }]
    },
    {
      title: 'Aside',
      name: 'aside',
      type: 'array',
      of: [{ type: 'block' }]
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
  //       subtitle: `Text Section: ${subtitle ? subtitle : 'unknown'}`
  //     };
  //   }
  // }
});
