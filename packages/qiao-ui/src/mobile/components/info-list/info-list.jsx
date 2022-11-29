// react
import React from "react";

// css
import "./info-list.scss";

// ui
import { MobileInfo } from "../info/info.jsx";

// log
import { colorLog } from "../../../util/log.js";

/**
 * mobile info list
 */
export const MobileInfoList = (props) => {
  colorLog("qiao-ui/mobile/info-list: render");

  const infoItems =
    props.infoList &&
    props.infoList.map((item, index) => {
      if (!item) return;

      return (
        <MobileInfo
          key={index}
          blank={props.blank}
          url={item.url}
          title={item.title}
          desc={item.desc}
          other={item.other}
        />
      );
    });

  return <div className="info-container">{infoItems}</div>;
};
