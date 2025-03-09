export const sortingDataScore = (a, b) => {
  const minA = Math.min(a.district, a.city, a.province, a.keywords);
  const minB = Math.min(b.district, b.city, b.province, b.keywords);

  // check distance value first
  if (minA !== minB) return minA - minB;

  // then sort by priority of keywords, distric, city, or province
  if (a.district !== b.district) return a.district - b.district;
  if (a.city !== b.city) return a.city - b.city;
  if (a.province !== b.province) return a.province - b.province;
  return a.keywords - b.keywords;
};
