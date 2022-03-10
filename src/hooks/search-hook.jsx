export default function useSearch(a, data) {
  const result = data.filter((item) => {
    if (item.location == a.location) {
      return true;
    }
    return false;
  });
  return {
    result,
    length: result.length,
  };
}
