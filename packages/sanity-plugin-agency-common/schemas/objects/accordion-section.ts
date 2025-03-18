interface AccordionSectionArgs {
  layoutVariantAccordionSection: { title: string; value: string }[];
}

export default ({ layoutVariantAccordionSection }: AccordionSectionArgs) => ({
  title: 'Accordion Section',
  name: 'common.layout.accordionSection',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantAccordionSection.map(({ title, value }) => ({ title, value }))
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
      title: 'Accordion Group',
      name: 'accordionGroup',
      type: 'array',
      of: [{ type: 'common.accordionGroup' }]
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
  //       subtitle: `Accordion Section: ${subtitle ? subtitle : 'unknown'}`
  //     };
  //   }
  // }
});
