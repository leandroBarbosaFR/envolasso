export default {
  title: 'Video Section',
  name: 'common.embedServices',
  type: 'object',
  fields: [
    {
      title: 'Emded Type',
      name: 'emdedType',
      type: 'string',
      options: {
        list: [
          {title: 'YouTube', value: 'youtube'},
          {title: 'Vimeo', value: 'vimeo'},
          {title: 'Spotify', value: 'spotify'},
        ],
      },
      validation: (Rule: {required: () => boolean}) => Rule.required(),
    },
    // YouTube
    {
      title: 'YouTube Video URL',
      name: 'youTubeVideUrl',
      type: 'url',
      hidden: ({parent}: any) => parent?.emdedType !== 'youtube',
    },
    // Vimeo
    {
      title: 'Vimeo Video URL',
      name: 'vimeoVideUrl',
      type: 'url',
      hidden: ({parent}: any) => parent?.emdedType !== 'vimeo',
    },
    // Spotify
    {
      title: 'Spotify Player URL',
      name: 'spotfiyPlayerUrl',
      type: 'url',
      hidden: ({parent}: any) => parent?.emdedType !== 'spotify',
    },
  ],
  preview: {
    select: {
      title: 'title',
      emdedType: 'emdedType',
    },
    prepare(selection: {title: string; emdedType: string}) {
      const {title, emdedType} = selection
      return {
        title: title,
        emdedType: `${emdedType ? emdedType : 'unknown'}`,
      }
    },
  },
}
