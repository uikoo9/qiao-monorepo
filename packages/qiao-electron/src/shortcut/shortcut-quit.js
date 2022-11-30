'use strict';

// electron
import { app, globalShortcut } from 'electron';

/**
 * shortcutInit
 */
export const shortcutInit = () => {
  app.on('will-quit', () => {
    globalShortcut.unregisterAll();
  });
};
