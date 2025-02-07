export default {
  title: 'Image',
  name: 'hero.image',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (Rule: { required: () => boolean }) => Rule.required()
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'image.alt',
      subtitle: 'image.caption',
      image: 'image'
    },
    prepare(selection: { title: string; subtitle: string; image: string }) {
      const { title, subtitle, image } = selection;
      return {
        title: `Alt: ${title ? title : ''}`,
        subtitle: `Caption: ${subtitle ? subtitle : ''}`,
        media: image
      };
    }
  }
};
