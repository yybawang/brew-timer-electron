import os from 'os';

export const WINDOW_WIDTH = os.platform() !== 'darwin' ? 1200 : 1400;
export const WINDOW_HEIGHT = os.platform() !== 'darwin' ? 800 : 900;
