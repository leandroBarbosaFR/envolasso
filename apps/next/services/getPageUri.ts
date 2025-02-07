const getPageUri = async (data: any, sortOption: any, locale: string, isSitemap = false) => {
  const PAGE_SIZE = data?.paginationCount?.paginationCount || 30;

  const allPostsPage = Math.ceil(data?.allPosts / PAGE_SIZE);
  const allPostsUri = Array.from({ length: allPostsPage }, (_, index) => `all/${index + 1}`);

  const catPostsUri =
    data?.categories &&
    data.categories.map((item: any) => {
      const { _updatedAt, slug, postsCount } = item;
      const totalPageCount = Math.ceil(postsCount / PAGE_SIZE);

      return totalPageCount
        ? {
            _updatedAt: _updatedAt,
            categoryPagination: `${slug?.current}/${totalPageCount}`
          }
        : {
            _updatedAt: _updatedAt,
            categoryPagination: `${slug?.current}/1`
          };
    });

  const sortOptionsData =
    sortOption &&
    sortOption.map((item: any) => {
      const { label } = item;
      return label;
    });

  const allPosts = allPostsUri
    .map((element1) => sortOptionsData.map((element2: any) => `${element1}/${element2}`))
    .flat();

  const catPosts = catPostsUri
    .map((element1: any) =>
      sortOptionsData.map((element2: any) => {
        return {
          _updatedAt: element1._updatedAt,
          catPostWithPagination: `${element1.categoryPagination}/${element2}`
        };
      })
    )
    .flat();

  const allPageUri = allPosts.concat(catPosts);

  const pages =
    allPageUri &&
    allPageUri.map((item) => {
      const uri = typeof item == 'string' ? item : item?.catPostWithPagination;

      if (isSitemap) {
        return {
          params: { category: [uri] },
          locale: locale,
          _updatedAt: item?._updatedAt
        };
      }
      return {
        params: { category: [uri] },
        locale: locale
      };
    });

  return pages;
};

export default getPageUri;
