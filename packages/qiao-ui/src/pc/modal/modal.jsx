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

        return <div className="modal-contaier">
            <div className="modal">
                <div className="modal-close">x</div>

            </div>
        </div>;
    }
}