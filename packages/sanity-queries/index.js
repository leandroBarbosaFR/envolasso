import queries from './queries';

const queryRouter = (queryDir, type, page, orderBy, sort, START_POS, END_POS, PER_PAGE) => {
  let error = '';
  let query = '';

  try {
    query = queries[queryDir](type, page, orderBy, sort, START_POS, END_POS, PER_PAGE);
  } catch (err) {
    error = 'QUERY ERROR: NO QUERY FOR SANITY';
  }

  return { query, error };
};

export default queryRouter;
