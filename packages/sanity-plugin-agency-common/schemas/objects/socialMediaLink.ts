export default {
  title: 'External Link',
  name: 'common.socialMediaLink',
  type: 'object',
  fields: [
    {
      title: 'Social Media Platform',
      name: 'platform',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Vimeo', value: 'youtube' },
          { title: 'YouTube', value: 'youtube' }
        ]
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'title',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'platform'
    },
    prepare(selection: { title: string; subtitle: string }) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `${subtitle ? subtitle : 'unknown'}`
      };
    }
  }
};
