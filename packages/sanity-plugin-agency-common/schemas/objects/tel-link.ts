export default {
  title: 'Contact Number',
  name: 'common.telLink',
  type: 'object',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    }
  ]
  // preview: {
  //   select: {
  //     title: 'Titre',
  //     subtitle: 'phoneNumber'
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
