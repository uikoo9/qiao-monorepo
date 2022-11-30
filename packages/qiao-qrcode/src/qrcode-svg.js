// qrcode
import qrcode from 'qrcode';

/**
 * qrcode svg
 * @param {*} id
 * @param {*} text
 * @returns
 */
export const qrcodeSvg = (id, text) => {
  // check
  if (!id || !text) return;

  // options
  const options = {};

  // div
  const $div = document.getElementById(id);
  if (!$div) return;

  // render
  options.width = options.width || $div.offsetWidth;
  qrcode.toString(text, options, (error, svg) => {
    if (error) {
      console.error(error);
      return;
    }

    $div.innerHTML = svg;
  });
};
