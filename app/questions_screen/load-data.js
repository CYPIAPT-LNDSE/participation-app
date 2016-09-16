import { ACTIVITY_DATA, DEFAULT_SCORE } from './defaults';

const generateData = () =>
  ({
    items: ACTIVITY_DATA.map((activity, i) =>
      Object.assign({ score: i === 0 ? DEFAULT_SCORE : null }, activity)),
    activeItem: 0
  });

export default () => {
  const storedData = window.localStorage.getItem('activityData');
  return (storedData
      ? JSON.parse(storedData)
      : generateData());
};
