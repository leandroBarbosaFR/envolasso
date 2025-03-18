export default {
  title: 'Text Column Basic',
  name: 'common.layout.textColumnBasic',
  type: 'object',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      description: 'Only used in CMS not redered on the fontend'
    },
    {
      title: 'Contenu text',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
  // preview: {
  //   select: {
  //     title: 'title'
  //   },
  //   prepare(selection: { title: string }) {
  //     const { title } = selection;
  //     return {
  //       title: title
  //     };
  //   }
  // }
};
