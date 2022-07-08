'use strict';

// react
import React from 'react';

// css
import './checkbox-list.scss';

/**
 * checkbox list
 */
export class CheckboxList extends React.Component {
    constructor(props) {
        super(props);

        this.checkboxChange = this.checkboxChange.bind(this);

        console.log('qiao-ui/pc/checkbox-list: constructor');
    }

    checkboxChange(e) {
        if (!this.props.checkboxChange) return;

        this.props.checkboxChange(e.target.checked, e.target.value);

        console.log('qiao-ui/pc/checkbox-list: checkboxChange');
    }

    render() {
        console.log('qiao-ui/pc/checkbox-list: render');

        const checkboxs = this.props.checkboxs && this.props.checkboxs.map((ck, index) => {
            if (!ck.name) return;

            const inputNormal = <input
                type="checkbox"
                id={ck.id || ck.name}
                name={ck.name}
                value={ck.value || ck.name}
                onChange={this.checkboxChange}
            />;
            const inputChecked = <input
                type="checkbox"
                id={ck.id || ck.name}
                name={ck.name}
                value={ck.value || ck.name}
                onChange={this.checkboxChange}
                defaultChecked
            />;

            return <div className="item" key={index}>
                {ck.checked ? inputChecked : inputNormal}
                <label htmlFor={ck.id || ck.name}>{ck.name}</label>
            </div>
        });

        return <div className="checkbox-list">
            {
                this.props.text ? <div className="item">{this.props.text}</div> : null
            }
            {checkboxs}
        </div>;
    }
}