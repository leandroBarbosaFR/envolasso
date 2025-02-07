export default {
  title: 'Navigation Dropdown',
  name: 'common.navigationDropdown',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'List',
      name: 'navigationDropdownList',
      type: 'array',
      of: [{ type: 'common.externalLink' }, { type: 'common.internalLink' }]
    }
  ]
};
