'use strict';

// react
import React from 'react';

// css
import './cards.scss';

/**
 * mobile cards
 */
export const MobileCards = (props) => {
    console.log('qiao-ui/mobile/cards: render');

    const cards = props.cards && props.cards.map((card, index) => {
        if (!card.title) return;

        return <div className="card" key={index}>
            <div className="title">{card.title}</div>
            <div className="desc">{card.desc}</div>
        </div>;
    });

    return (
        <div className="cards">{cards}</div>
    );
};