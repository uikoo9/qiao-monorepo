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
    }

    checkboxChange(e){
        if(!this.props.checkboxChange) return;
        
        this.props.checkboxChange(e.target.checked, e.target.value);
    }
    
    render() {
        const checkboxs = this.props.checkboxs && this.props.checkboxs.map((ck, index) => {
            if (!ck.name) return;

            return <div className="item" key={index}>
                <input 
                    type="checkbox" 
                    id={ck.id || ck.name} 
                    name={ck.name} 
                    value={ck.value || ck.name} 
                    onChange={this.checkboxChange}
                />
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