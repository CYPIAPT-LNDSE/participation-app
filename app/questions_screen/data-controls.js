import {
  MIN_SCORE,
  MAX_SCORE,
  DEFAULT_SCORE } from './defaults';
import loadData from './load-data';

const activityData = loadData();

const saveData = () => {
  window.localStorage.setItem('activityData', JSON.stringify(activityData));
};

export const getCurrentActivity = () =>
  activityData.items[activityData.activeItem];

export const isCurrentFirstActivity = () =>
  activityData.activeItem === 0;

export const isCurrentLastActivity = () =>
  activityData.activeItem === activityData.items.length - 1;

export const moveToNextActivity = () => {
  if (activityData.activeItem < activityData.items.length - 1) activityData.activeItem += 1;
  if (getCurrentActivity().score === null) getCurrentActivity().score = DEFAULT_SCORE;
  saveData();
};

export const areActivitiesComplete = () =>
  activityData.items.every(({score}) => score !== null);

export const moveToPrevActivity = () => {
  if (activityData.activeItem > 0) activityData.activeItem -= 1;
  saveData();
};

export const scoreDown = () => {
  if (getCurrentActivity().score === MIN_SCORE) return;
  getCurrentActivity().score -= 1;
  saveData();
};

export const scoreUp = () => {
  if (getCurrentActivity().score === MAX_SCORE) return;
  getCurrentActivity().score += 1;
  saveData();
};
