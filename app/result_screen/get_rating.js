
const getItems = () =>
  JSON.parse(window.localStorage.getItem('activityData')).items;

const calcScore = (items) =>
  items
  .map(({score}) => score)
  .reduce((a, b) => a + b);

const calcRating = (score) => {
  if (score < 10) return 1;
  if (score < 15) return 2;
  if (score < 20) return 3;
  if (score < 24) return 4;
  if (score < 28) return 5;
  if (score < 32) return 6;
  if (score < 36) return 7;
  return 8;
};

export const getRating = () =>
  calcRating(calcScore(getItems()));
