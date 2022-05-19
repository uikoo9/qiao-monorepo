'use strict';

// react
import React from 'react';

// index input
import IndexInput from './index-input.jsx';

// index constant
import { IndexConstant } from '../_constant.js';

/**
 * index path
 */
export default class IndexPath extends React.Component {
    render() {
        return (
            <div className='index-path'>
                <IndexInput 
                    text={IndexConstant.srcText}
                    path={this.props.srcPath}
                    click={this.props.clickPickSrc}
                    btn={IndexConstant.srcBtn}
                />
                <IndexInput 
                    text={IndexConstant.destText}
                    path={this.props.destPath}
                    click={this.props.clickPickDest}
                    btn={IndexConstant.destBtn}
                />
            </div>
        );
    }
}