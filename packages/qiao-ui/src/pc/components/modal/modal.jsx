// react
import React from 'react';

// css
import './modal.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * modal
 */
export const Modal = (props) => {
  colorLog('qiao-ui/pc/modal: render');

  const modal = (
    <div className="modal-container">
      <div className="modal" style={{ width: props.width }}>
        <div className="modal-close" onClick={props.closeModal}>
          x
        </div>
        {props.children}
      </div>
    </div>
  );

  return props.show ? modal : null;
};
