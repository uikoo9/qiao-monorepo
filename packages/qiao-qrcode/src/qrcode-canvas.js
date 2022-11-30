// qrcode
import qrcode from 'qrcode';

/**
 * qrcode canvas
 * @param {*} id
 * @param {*} text
 * @returns
 */
export const qrcodeCanvas = (id, text) => {
  // check
  if (!id || !text) return;

  // options
  const options = {};

  // div
  const $div = document.getElementById(id);
  if (!$div) return;

  // canvas
  const cid = `${id}-canvas`;
  $div.innerHTML = `<canvas id="${cid}"></canvas>`;

  // render
  options.width = options.width || $div.offsetWidth;
  qrcode.toCanvas(document.getElementById(cid), text, options, (error) => {
    if (error) {
      console.error(error);
      return;
    }
  });
};
