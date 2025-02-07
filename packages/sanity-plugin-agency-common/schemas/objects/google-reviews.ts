interface GoogleReviewSectionArgs {
  layoutVariantGoogleReviewSection: { title: string; value: string }[];
}

export default ({ layoutVariantGoogleReviewSection }: GoogleReviewSectionArgs) => ({
  title: 'Google Review Section',
  name: 'common.layout.googleReviewSection',
  type: 'object',
  fields: [
    {
      title: 'Layout Variant',
      name: 'layoutVariant',
      type: 'string',
      options: {
        list: layoutVariantGoogleReviewSection.map(({ title, value }) => ({ title, value }))
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Sub title',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    },
    prepare(selection: { title: string; subtitle: string }) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: `Google Reviews Section: ${subtitle ? subtitle : 'unknown'}`
      };
    }
  }
});
