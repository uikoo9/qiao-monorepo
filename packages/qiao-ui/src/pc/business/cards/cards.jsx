// react
import React from 'react';

// css
import './cards.scss';

/**
 * cards
 */
export const Cards = (props) => {
    console.log('qiao-ui/pc/cards: render');

    const cards = props.cards && props.cards.map((card, index) => {
        if (!card.title) return;

        return <div className="card" key={index}>
            <div className="title">{card.title}</div>
            <div className="desc">{card.desc}</div>
        </div>;
    });

    return <div className="cards">{cards}</div>;
};