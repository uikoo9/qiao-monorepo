// react
import React from 'react';

// css
import './modal.scss';

/**
 * modal
 */
export class Modal extends React.Component {
    render() {
        console.log('qiao-ui/pc/modal: render');

        return <div className={this.props.show ? 'modal-container' : 'modal-container hide'}>
            <div className="modal" style={{width: this.props.width}}>
                <div className="modal-close" onClick={this.props.closeModal}>x</div>
                {this.props.children}
            </div>
        </div>;
    }
}