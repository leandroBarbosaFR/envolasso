export default {
  name: 'siteSettings.pageNotFound404',
  title: 'Page non trouvée 404',
  type: 'object',
  i18n: true,
  fields: [
    {
      title: 'Image principale',
      name: 'imageSource',
      type: 'image'
    },
    {
      title: 'Sous-titre',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Contenu text',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Call to Action (CTA) titre',
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
      title: 'Adresse',
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
