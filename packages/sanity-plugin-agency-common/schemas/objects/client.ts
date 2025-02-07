export default {
  title: 'Client',
  name: 'common.client',
  type: 'object',
  fields: [
    {
      title: 'Client Name',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'logo',
    },
    prepare(selection: {title: string; image: string}) {
      const {title, image} = selection
      return {
        title: title,
        media: image,
      }
    },
  },
}
