export default (type, page, orderBy, sort, START_POS, END_POS, PER_PAGE) =>
  `
  ${
    type === 'blog'
      ? `{
        "blogsCount": count(*[_type == "blog" && __i18n_lang == $locale && !(_id in path('drafts.**'))]),
        "blogs": *[_type == "${type}" && _id > $lastId && __i18n_lang == $locale && !(_id in path('drafts.**'))] 
        `
      : `*[_type == "${type}" && slug.current == $slug && __i18n_lang == $locale && !(_id in path('drafts.**'))][0] {
      title,
      "blogsCount": count(*[_type=="blog" && references(^._id) && __i18n_lang == $locale && !(_id in path('drafts.**'))]),
      "blogs": *[_type=="blog" && references(^._id) && __i18n_lang == $locale && !(_id in path('drafts.**'))] `
  } ${orderBy ? `| order(lower(${orderBy}) ${sort})` : `| order(_createdAt desc)`} ${
    page ? `[${START_POS ? START_POS : 0}...${END_POS ? END_POS : 30}] ` : `[${0}...${PER_PAGE}] `
  }
  {
    _id,
    slug,
    title,
    subtitle,
    body,
    excerpt,
    dynamicRoute,
    "featureImage": image {
      alt,
      caption,
      asset->{
        url,
        metadata {
          lqip
        }
      },
    },
    category->{
      slug
    }
  }
}
`;
