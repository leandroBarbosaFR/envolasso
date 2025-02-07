export default {
  title: 'Video',
  name: 'hero.video',
  type: 'object',
  fields: [
    {
      title: 'First frame image',
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (Rule: {required: () => boolean}) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'image.alt',
      subtitle: 'videoUrl',
      image: 'image',
    },
    prepare(selection: {title: string; subtitle: string; image: string}) {
      const {title, subtitle, image} = selection
      return {
        title: `Alt: ${title ? title : ''}`,
        subtitle: `Video url: ${subtitle ? subtitle : ''}`,
        media: image,
      }
    },
  },
}
