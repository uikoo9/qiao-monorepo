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

        const selected = <option value={opt.value} key={index} selected>{opt.txt}</option>;
        const normal = <option value={opt.value} key={index}>{opt.txt}</option>;

        return opt.value == props.value ? selected : normal;
    });

    // return
    return <select className='select' onChange={props.onChange}>{ options }</select>;
};