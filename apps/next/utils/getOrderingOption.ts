const getOrderingOption = (orderBy: any) => {
  let filter = null;
  if (orderBy === 'latest') {
    filter = {
      order: '_createdAt',
      sort: 'desc'
    };
  } else if (orderBy === 'oldest') {
    filter = {
      order: '_createdAt',
      sort: 'asc'
    };
  } else if (orderBy === 'a-z') {
    filter = {
      order: 'title',
      sort: 'asc'
    };
  } else if (orderBy === 'z-a') {
    filter = {
      order: 'title',
      sort: 'desc'
    };
  }

  return filter;
};

export default getOrderingOption;
