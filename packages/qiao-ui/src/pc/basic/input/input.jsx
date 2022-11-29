// react
import React from "react";

// css
import "./input.scss";

// log
import { colorLog } from "../../../util/log.js";

/**
 * input
 */
export const Input = (props) => {
  colorLog("qiao-ui/pc/input: render");

  const hiddenInput = <input type={props.type} value={props.value} />;

  const normalInput = (
    <div className="input">
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
    </div>
  );

  return props.type == "hidden" ? hiddenInput : normalInput;
};
