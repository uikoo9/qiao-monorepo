// react
import React from "react";

// css
import "./button.scss";

// log
import { colorLog } from "../../../util/log.js";

/**
 * button
 */
export const Button = (props) => {
  colorLog("qiao-ui/pc/button: render");

  return (
    <div className="btn">
      <div
        className="ctx"
        style={{ width: props.width }}
        onClick={props.onClick}
      >
        {props.text}
      </div>
    </div>
  );
};
