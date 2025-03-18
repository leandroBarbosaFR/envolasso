export default {
  title: 'External Link',
  name: 'common.externalLink',
  type: 'object',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'External Link',
      name: 'url',
      type: 'url',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    }
  ]
  // preview: {
  //   select: {
  //     title: 'Titre',
  //     subtitle: 'url'
  //   },
  //   prepare(selection: { title: string; subtitle: string }) {
  //     const { title, subtitle } = selection;
  //     return {
  //       title: title,
  //       subtitle: `${subtitle ? subtitle : 'unknown'}`
  //     };
  //   }
  // }
};
