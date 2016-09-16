import { MIN_SCORE, MAX_SCORE } from './defaults';
import { render, clear } from './canvas-controls';
import { scoreDown,
  scoreUp,
  getCurrentActivity,
  moveToNextActivity,
  moveToPrevActivity,
  isCurrentFirstActivity,
  isCurrentLastActivity } from './data-controls';

  const displayCurrentActivity = () => {
    document.querySelector('#display-activity').textContent =
    getCurrentActivity().description;
  };

  export const updateScoreDisplay = () => {
    clear();
    render(getCurrentActivity());
  };

  export const refreshUI = () => {
    updateButtons(getCurrentActivity().score);
    updateScoreDisplay();
    displayCurrentActivity();
  };

  const updateButtons = score => {
    showScoreButtonDisplay('up', score < MAX_SCORE);
    showScoreButtonDisplay('down', score > MIN_SCORE);
    showMoveButtonDisplay('prev', !isCurrentFirstActivity());
    showMoveButtonDisplay('next', !isCurrentLastActivity());
  };

  const showMoveButtonDisplay = (direction, show) => {
    document
    .querySelector(`#${direction === 'prev' ? 'leftArrow' : 'rightArrow'}`)
    .style
    .display = show ? 'inherit' : 'none';
  };

  const showScoreButtonDisplay = (direction, show) => {
    document
    .querySelector(`#activity-score-${direction}`)
    .style
    .display = show ? 'inherit' : 'none';
  };

  const enableNextButton = () =>
  document
  .querySelector('#rightArrow')
  .addEventListener('click', () => {
    moveToNextActivity();
    refreshUI();
  });

  const enablePrevButton = () =>
  document
  .querySelector('#leftArrow')
  .addEventListener('click', () => {
    moveToPrevActivity();
    refreshUI();
  });

  const enableScoreDownButton = () =>
  document.querySelector('#activity-score-down')
  .addEventListener('click', () => {
    scoreDown();
    refreshUI();
  });

  const enableScoreUpButton = () =>
  document.querySelector('#activity-score-up')
  .addEventListener('click', () => {
    scoreUp();
    refreshUI();
  });

  export const enableUI = () => {
    enableScoreUpButton();
    enableScoreDownButton();
    enableNextButton();
    enablePrevButton();
  };
