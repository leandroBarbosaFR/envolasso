export default {
  title: 'Testimonial',
  name: 'common.testimonial',
  type: 'object',
  fields: [
    {
      title: 'Quote',
      name: 'quote',
      type: 'text',
      rows: 4
    },
    {
      title: 'Credit',
      name: 'credit',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Légende'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text'
        }
      ]
    }
  ]
  // preview: {
  //   select: {
  //     title: 'Titre',
  //     subtitle: 'credit',
  //     image: 'image'
  //   },
  //   prepare(selection: { title: string; subtitle: string; image: string }) {
  //     const { title, subtitle, image } = selection;
  //     return {
  //       title: title,
  //       subtitle: `${subtitle ? subtitle : 'unknown'}`,
  //       media: image
  //     };
  //   }
  // }
};
