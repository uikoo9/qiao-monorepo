// react
import React from "react";

// css
import "./info.scss";

// ui
import { Link } from "../../../index.js";

// log
import { colorLog } from "../../../util/log.js";

/**
 * info
 */
export const Info = (props) => {
  colorLog("qiao-ui/pc/info: render");

  return (
    <div className="info">
      <div className="item-title">
        <Link blank={props.blank} url={props.url} txt={props.title} />
      </div>
      {props.desc ? <div className="item-desc">{props.desc}</div> : null}
      {props.other ? <div className="item-other">{props.other}</div> : null}
    </div>
  );
};
