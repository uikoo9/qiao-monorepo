// qiao-console
import { writeLine } from 'qiao-console';

// line
let line;

/**
 * set line
 * @param {*} l
 */
export const setLine = (l) => {
  line = l;
};

/**
 * callback
 * @param {*} index
 * @param {*} res
 */
export const callback = (index, res) => {
  writeLine(line + index, res);
};

/**
 * complete
 * @param {*} l
 */
export const complete = (l) => {
  writeLine(line + l, '');
  writeLine(line + l + 1, 'qiao-lerna end');
};
