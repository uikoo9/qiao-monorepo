// qrcode
import qrcode from "qrcode";

/**
 * qrcode img
 * @param {*} id
 * @param {*} text
 * @returns
 */
export const qrcodeImg = (id, text) => {
  // check
  if (!id || !text) return;

  // options
  const options = {};

  // div
  const $div = document.getElementById(id);
  if (!$div) return;

  // render
  options.width = options.width || $div.offsetWidth;
  qrcode.toDataURL(text, options, (error, url) => {
    if (error) {
      console.error(error);
      return;
    }

    const img = new Image();
    img.src = url;
    img.width = options.width;
    img.height = options.width;

    $div.appendChild(img);
  });
};
