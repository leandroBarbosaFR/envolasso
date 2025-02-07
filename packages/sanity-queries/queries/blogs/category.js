export default (type) =>
  `
    *[_type == "${type}" && __i18n_lang == $locale && !(_id in path('drafts.**'))]
    {
        _type,
        title,
        slug,
        subtitle,
    }
`;
