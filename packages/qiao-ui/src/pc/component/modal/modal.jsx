// react
import React from 'react';

// css
import './modal.scss';

/**
 * modal
 */
export const Modal = (props) => {
    console.log('qiao-ui/pc/modal: render');

    const modal = <div className="modal-container">
        <div className="modal" style={{ width: props.width }}>
            <div className="modal-close" onClick={props.closeModal}>x</div>
            {props.children}
        </div>
    </div>;

    return props.show ? modal : null;
};