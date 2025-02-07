interface ContactFormArgs {
  layoutVariantContactForm: { title: string; value: string }[];
}

export default ({ layoutVariantContactForm }: ContactFormArgs) => ({
  title: 'Contact Form',
  name: 'common.layout.contactForm',
  type: 'object',
  fields: [
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      options: {
        list: layoutVariantContactForm.map(({ title, value }) => ({ title, value }))
      },
      validation: (Rule: { required: () => boolean }) => Rule.required()
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      title: 'Completion message',
      name: 'formMessage',
      type: 'text',
      rows: 4,
      description: 'Message after the contact form has been submitted...'
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
        subtitle: `Conact Form: ${subtitle ? subtitle : ''}`
      };
    }
  }
});
