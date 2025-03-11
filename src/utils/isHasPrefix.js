import { distance } from "./levenhsteinDistance.js";

export const isHasPrefix = (base, search, tolerance = 0) => {
  const baseLowerCase = String(base).toLowerCase();
  const searchLowerCase = String(search).toLowerCase();

  if (tolerance === 0) return baseLowerCase.startsWith(searchLowerCase);

  const searchLength = searchLowerCase.length;
  const slicedBase = baseLowerCase.slice(0, searchLength);

  return distance(slicedBase, searchLowerCase) <= tolerance;
};
