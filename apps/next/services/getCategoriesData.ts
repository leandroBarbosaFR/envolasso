import sanityClient from '../lib/sanity-client';

import singlesQuery from '@agency-platform/sanity-queries';

const getCategoriesData = async ({ queryDir, type, slug = '', locale }: any) => {
  try {
    const { query, error } = singlesQuery(queryDir, type);

    if (!query) throw new Error(error);

    const data = await sanityClient.fetch(query, {
      slug,
      locale
    });

    if (error) throw new Error(JSON.stringify(error || 404));
    return data;
  } catch (error: any) {
    console.log(error.message);
    return { error };
  }
};

export default getCategoriesData;
