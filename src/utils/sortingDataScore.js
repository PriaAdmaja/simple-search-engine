export const sortingDataScore = (x, y) => {
  const a = x.dataScore;
  const b = y.dataScore;

  const minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength; i++) {
    if (a[i].level !== b[i].level) {
      return a[i].level - b[i].level; // Lower level is prioritized
    }
  }

  // If all levels match, compare total scores for each level
  const totalScoreA = calculateLevelTotalScore(a);
  const totalScoreB = calculateLevelTotalScore(b);

  for (let i = 0; i < minLength; i++) {
    const level = a[i].level;
    if (totalScoreA[level] !== totalScoreB[level]) {
      return totalScoreB[level] - totalScoreA[level]; // Higher total score is prioritized
    }
  }

  return a.datum.district_name - b.datum.district_name; // If still equal, sort by district name
};

const calculateLevelTotalScore = (arr) => {
  return arr.reduce((acc, { level, score }) => {
    acc[level] = (acc[level] || 0) + score;
    return acc;
  }, {});
};