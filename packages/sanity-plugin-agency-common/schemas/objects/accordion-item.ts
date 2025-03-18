export default {
  title: 'Service',
  name: 'common.accordionItem',
  type: 'object',
  fields: [
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
    }
  ]
};
