import { distance } from "./levenhsteinDistance.js";

export const keywordsScore = (datum, search) => {
  const keywords = datum.keywords.split(" ");
  const searchTerms = search.toLowerCase().split(" ");

  const searchMatch = searchTerms.map((s) =>
    Math.min(...keywords.map((k) => distance(s, k)))
  );

  return searchMatch.reduce((a, b) => a + b, 0) / searchMatch.length;
};
