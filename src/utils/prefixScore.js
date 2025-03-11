import { distance } from "./levenhsteinDistance.js";

export const prefixScore = (base, search, maxDistance = 0) => {
  const searchLength = String(search).length;
  const score = distance(String(base).slice(0, searchLength), search);
  const isPrefix =
    maxDistance === 0
      ? String(base).toLowerCase().startsWith(String(search).toLowerCase())
      : score <= maxDistance;

  if (!isPrefix) return 10;

  const baseValue = Number(
    Number(10 - (searchLength / base.length) * 10).toFixed(1)
  );

  return maxDistance === 0
    ? baseValue
    : baseValue + score;
};
