// react
import React from 'react';

// css
import './cards.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * cards
 */
export const Cards = (props) => {
    colorLog('qiao-ui/pc/cards: render');

    const cards = props.cards && props.cards.map((card, index) => {
        if (!card.title) return;

        return <div className="card" key={index}>
            <div className="title">{card.title}</div>
            <div className="desc">{card.desc}</div>
        </div>;
    });

    return <div className="cards">{cards}</div>;
};