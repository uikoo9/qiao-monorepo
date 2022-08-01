'use strict';

// react
import React from 'react';

// css
import './cards.scss';

/**
 * mobile cards
 */
export class MobileCards extends React.Component {
  render() {
    console.log('qiao-ui/mobile/cards: render');

    const cards = this.props.cards && this.props.cards.map((card, index) => {
      if (!card.title) return;

      return <div className="card" key={index}>
        <div className="title">{card.title}</div>
        <div className="desc">{card.desc}</div>
      </div>
    });

    return (
      <div className="cards">{cards}</div>
    );
  }
}