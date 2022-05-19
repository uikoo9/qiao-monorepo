'use strict';

// react
import React from 'react';

// index constant
import { IndexConstant } from '../_constant.js';

/**
 * index input
 */
export default class IndexInput extends React.Component {
    render() {
        return (
            <div>
                <div className='label'>
                    {this.props.text}
                </div>
                <div className='input'>
                    <input value={this.props.path} disabled/>
                </div>
                <div className='btn' onClick={this.props.click}>
                    {this.props.btn}
                </div>
            </div>
        );
    }
}