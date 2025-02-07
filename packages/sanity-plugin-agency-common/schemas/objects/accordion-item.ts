export default {
  title: 'Service',
  name: 'common.accordionItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
