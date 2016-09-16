import { enableUI, refreshUI } from './ui-controls';

import clear from './canvas-controls.js';

const onLoad = () => {
  enableUI();
  refreshUI();
};

const onUnload = () => {
  clear();
};

export default {
  onLoad,
  onUnload
};
