import { distance } from "./levenhsteinDistance.js";

export const keywordsScore = (datum, search) => {
  const keywords = [datum.district_name, datum.city_name, datum.province_name];
  const searchTerms = search.toLowerCase().split(" ");

  const searchMatch = searchTerms.map((s) =>
    Math.min(...keywords.map((k) => distance(s, k)))
  );

  return searchMatch.reduce((a, b) => a + b, 0) / searchMatch.length;
};
