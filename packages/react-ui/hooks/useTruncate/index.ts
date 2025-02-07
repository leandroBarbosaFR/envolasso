const useTruncate = (str: string, maxLength: number) => {
  if (!str || !str?.length) return null;
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength).trim()}...`;
};

export default useTruncate;
