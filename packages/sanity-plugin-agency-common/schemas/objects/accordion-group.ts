export default {
  title: 'Service',
  name: 'common.accordionGroup',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Accordion',
      name: 'accordion',
      type: 'array',
      of: [{type: 'common.accordionItem'}],
    },
  ],
}
