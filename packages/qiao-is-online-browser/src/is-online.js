/**
 * isOnline
 * @param {*} src
 * @returns
 */
export const isOnline = (src) => {
  return new Promise(function (resolve, reject) {
    if (!src) return reject(Error("need online img src"));

    let img = new Image();
    img.src = `${src}?r=${Math.random()}`;
    img.onload = () => {
      resolve("online");
    };
    img.onerror = () => {
      resolve("offline");
    };
  });
};
