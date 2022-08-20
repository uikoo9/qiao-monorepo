// react
import React from 'react';

// css
import './checkbox-list.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * checkbox list
 */
export const CheckboxList = (props) => {
    colorLog('qiao-ui/pc/checkbox-list: render');

    // change
    const checkboxChange = (e) => {
        colorLog('qiao-ui/pc/checkbox-list: checkboxChange');

        if (!props.checkboxChange) return;
        props.checkboxChange(e.target.checked, e.target.value);
    };

    // checkboxs
    const checkboxs = props.checkboxs && props.checkboxs.map((ck, index) => {
        if (!ck.name) return;

        const inputNormal = <input
            type="checkbox"
            id={ck.id || ck.name}
            name={ck.name}
            value={ck.value || ck.name}
            onChange={checkboxChange}
        />;
        const inputChecked = <input
            type="checkbox"
            id={ck.id || ck.name}
            name={ck.name}
            value={ck.value || ck.name}
            onChange={checkboxChange}
            defaultChecked
        />;

        return <div className="item" key={index}>
            {ck.checked ? inputChecked : inputNormal}
            <label htmlFor={ck.id || ck.name}>{ck.name}</label>
        </div>;
    });

    // return
    return <div className="checkbox-list">
        {
            props.text ? <div className="item">{props.text}</div> : null
        }
        {
            checkboxs
        }
    </div>;
};