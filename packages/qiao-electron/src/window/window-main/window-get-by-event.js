'use strict';

// browser window
import { BrowserWindow } from 'electron';

/**
 * windowGetByEvent
 * @param {*} event
 * @returns
 */
export function windowGetByEvent(event) {
  // check
  if (!event || !event.sender) return;

  // return
  return BrowserWindow.fromWebContents(event.sender);
}
