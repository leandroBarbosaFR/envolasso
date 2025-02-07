export default (type, page, orderBy, sort, START_POS, END_POS, PER_PAGE) =>
  `
  ${
    type === 'portfolio'
      ? `{
        "portfoliosCount": count(*[_type == "portfolio" && __i18n_lang == $locale && !(_id in path('drafts.**'))]),
        "portfolios": *[_type == "${type}" && _id > $lastId && __i18n_lang == $locale && !(_id in path('drafts.**'))]
        `
      : `*[_type == "${type}" && slug.current == $slug && __i18n_lang == $locale && !(_id in path('drafts.**'))][0] {
      title,
      "portfoliosCount": count(*[_type=='portfolio' && references(^._id) && __i18n_lang == $locale && !(_id in path('drafts.**'))]),
      "portfolios": *[_type=='portfolio' && references(^._id) && __i18n_lang == $locale && !(_id in path('drafts.**'))] `
  } ${orderBy ? `| order(lower(${orderBy}) ${sort})` : `| order(_createdAt desc)`} ${
    page ? `[${START_POS ? START_POS : 0}...${END_POS ? END_POS : 20}] ` : `[${0}...${PER_PAGE}] `
  }
  {
    ...,
    "featureImage": image {
      alt,
      caption,
      asset->{
        url,
        metadata {
          lqip
        }
      }
    },
    category->{
      slug
    }
  }
}
`;
