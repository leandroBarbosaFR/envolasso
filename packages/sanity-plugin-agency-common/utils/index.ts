export async function isUniqueAcrossAllLocales(slug, context, type) {
  const { document, getClient } = context;
  const client = getClient({ apiVersion: '2022-12-07' });
  const id = document._id.replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
    locale: context.document.__i18n_lang || 'en_GB',
    type
  };
  const query = `!defined(*[!(_id in [$draft, $published]) && _type == $type && slug.current == $slug && __i18n_lang == $locale][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}

export async function filterReferencesByLocale({ document }) {
  return {
    filter: '__i18n_lang == $locale',
    params: { locale: document.__i18n_lang || 'en_GB' }
  };
}
