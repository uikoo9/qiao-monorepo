// react
import React from 'react';

// css
import './select.scss';

/**
 * select
 */
export const Select = (props) => {
    // options
    const options = props.options && props.options.map((opt, index) => {
        if (!opt.txt || !opt.value) return;

        return <option value={opt.value} key={index}>{opt.txt}</option>;
    });

    // return
    return <select className='select' value={props.value} onChange={props.onChange}>{ options }</select>;
};