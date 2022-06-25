'use strict';

// react
import React from 'react';

// css
import './checkbox-list.scss';

/**
 * checkbox list
 */
export class CheckboxList extends React.Component {
    render() {
        const checkboxs = this.props.checkboxs && this.props.checkboxs.map((ck, index) => {
            if (!ck.name) return;

            return <div className="item" key={index}>
                <input type="checkbox" id={ck.id || ck.name} name={ck.name} value={ck.value || ck.name} />
                <label htmlFor="express">{ck.name}</label>
            </div>
        });
        
        return <div className="checkbox-list">
            {
                this.props.text ? <div className="item">{this.props.text}</div> : null
            }
            { checkboxs }
        </div>;
    }
}