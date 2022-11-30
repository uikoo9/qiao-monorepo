// react
import React, { useState, useEffect } from 'react';

// css
import './menus.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * menus
 */
export const Menus = (props) => {
  colorLog('qiao-ui/pc/menus: render');

  // state
  const [activeUrl, setActiveUrl] = useState(null);

  // effect
  useEffect(() => {
    colorLog('qiao-ui/pc/menus: useEffect');

    let aurl;
    try {
      aurl = '#' + location.href.split('#')[1];
      setActiveUrl(aurl);
    } catch (e) {
      colorLog(e);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // on click
  const onclick = (menu) => {
    colorLog('qiao-ui/pc/menus: onclick');

    if (!menu.url) return;

    setActiveUrl(menu.url);
    location.href = menu.url;
  };

  // menus
  const menus =
    props.menus &&
    props.menus.map((menu, index) => {
      if (!menu.name) return;

      return (
        <div
          className={`${activeUrl == menu.url ? 'menu active' : 'menu'}`}
          key={index}
          onClick={() => {
            onclick(menu);
          }}
        >
          {menu.name}
        </div>
      );
    });

  return <div className="menus">{menus}</div>;
};
