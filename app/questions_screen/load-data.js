import {
  DEFAULT_SCORE,
  ACTIVITY_DATA } from './defaults';

const generateData = () =>
  ({
    items: ACTIVITY_DATA.map(activity => Object.assign({ score: DEFAULT_SCORE }, activity)),
    activeItem: 0
  });

export default () => {
  const storedData = window.localStorage.getItem('activityData');
  return (storedData
      ? JSON.parse(storedData)
      : generateData());
};
