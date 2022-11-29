// react
import React from "react";

// css
import "./cards.scss";

// log
import { colorLog } from "../../../util/log.js";

/**
 * mobile cards
 */
export const MobileCards = (props) => {
  colorLog("qiao-ui/mobile/cards: render");

  const cards =
    props.cards &&
    props.cards.map((card, index) => {
      if (!card.title) return;

      return (
        <div className="card" key={index}>
          <div className="title">{card.title}</div>
          <div className="desc">{card.desc}</div>
        </div>
      );
    });

  return <div className="cards">{cards}</div>;
};
