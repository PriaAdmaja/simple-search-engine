import { formattingValue } from "./formattingValue.js";
import { isHasPrefix } from "./isHasPrefix.js";
import { distance } from "./levenhsteinDistance.js";

export const score = (base, search) => {
  const baseClean = formattingValue(base);
  const searchClean = formattingValue(search);
  const score = 100 * (searchClean.length / baseClean.length);

  if (baseClean === searchClean) {
    return {
      level: 1,
      score: 100,
    };
  }

  if (baseClean.startsWith(searchClean)) {
    return {
      level: 1,
      score,
    };
  }

  if (baseClean.includes(searchClean)) {
    return {
      level: 2,
      score,
    };
  }

  if (isHasPrefix(baseClean, searchClean, 1)) {
    return {
      level: 3,
      score,
    };
  }

  const badScore = 100 - distance(baseClean, searchClean) * 10;

  if (distance(baseClean, searchClean) <= 2) {
    return {
      level: 4,
      score: badScore > 0 ? badScore : 0,
    };
  }

  return {
    level: 5,
    score: badScore > 0 ? badScore : 0,
  };
};
