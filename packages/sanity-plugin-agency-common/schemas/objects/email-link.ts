export default {
  title: 'Email address',
  name: 'common.emailLink',
  type: 'object',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Email Address',
      name: 'email',
      type: 'email',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    }
  ]
  // preview: {
  //   select: {
  //     title: 'Titre',
  //     subtitle: 'email'
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
