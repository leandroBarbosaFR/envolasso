export default {
  name: 'siteSettings.pageNotFound404',
  title: '404 Not Gound',
  type: 'object',
  i18n: true,
  fields: [
    {
      title: 'Feature Image',
      name: 'imageSource',
      type: 'image'
    },
    {
      title: 'Sub title',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Call to Action (CTA) title',
      name: 'ctaTitle',
      type: 'string'
    },
    {
      title: 'Call to Action (CTA)',
      name: 'cta',
      type: 'array',
      of: [
        { type: 'common.externalLink' },
        { type: 'common.internalLink' },
        { type: 'common.emailLink' },
        { type: 'common.telLink' },
        { type: 'common.linkedInLink' }
      ]
    },
    {
      title: 'Address',
      name: 'address',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Social Links (CTA)',
      name: 'sociallinks',
      type: 'array',
      of: [
        { type: 'common.externalLink' },
        { type: 'common.internalLink' },
        { type: 'common.emailLink' },
        { type: 'common.telLink' }
      ]
    }
  ]
};
