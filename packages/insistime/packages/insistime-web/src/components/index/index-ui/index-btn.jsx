'use strict';

// react
import React from 'react';

// antd
import { Button } from 'antd';

// index constant
import { IndexConstant } from '../_constant.js';

/**
 * index btn
 */
export default class IndexBtn extends React.Component {
    render() {
        return (
            <div className='index-btn'>
                <div className='btn'>
                    <Button type="primary" size="large" block onClick={this.props.clickGo}>{IndexConstant.goText}</Button>
                </div>
            </div>
        );
    }
}