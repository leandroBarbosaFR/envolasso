import sanityClient from '../lib/sanity-client';
import feedQuery from '@agency-platform/sanity-queries';

const getFeedData = async ({ queryDir, type, slug = '', perPage = 30, page, orderBy, sort, locale }: any) => {
  try {
    const END_POS = perPage * Number(page);
    const START_POS = END_POS - perPage;
    let lastId = '';

    const { query, error } = feedQuery(queryDir, type, page, orderBy, sort, START_POS, END_POS, perPage);

    if (!query) throw new Error(error);

    const data = await sanityClient.fetch(query, {
      slug,
      lastId,
      locale
    });
    if (data?.length > 0) {
      lastId = data[data.length - 1]._id;
    } else {
      lastId = '';
    }

    if (error) throw new Error(JSON.stringify(error || 404));
    return data;
  } catch (error: any) {
    console.log(error.message);
    return { error };
  }
};

export default getFeedData;
