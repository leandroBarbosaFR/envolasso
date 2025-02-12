export default () => ({
  title: 'HTML field',
  name: 'common.htmlField',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Only used in CMS not redered on the fontend'
    },
    {
      type: 'code',
      name: 'myCodeField',
      title: 'Code with all options',
      options: {
        language: 'html',
        languageAlternatives: [{ title: 'HTML', value: 'html' }],
        withFilename: false
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection: { title: string }) {
      const { title } = selection;
      return {
        title: title,
        subtitle: 'html field'
      };
    }
  }
});
