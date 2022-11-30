// react
import React from 'react';

// css
import './footer.scss';

// ui
import { Link } from '../../../index.js';

// log
import { colorLog } from '../../../util/log.js';

/**
 * mobile footer
 */
export const MobileFooter = (props) => {
  colorLog('qiao-ui/mobile/footer: render');

  return (
    <div className="footer">
      <Link url={props.companyUrl} txt={props.companyName} />
      &nbsp;&nbsp;&nbsp;
      <Link blank={true} url={props.beianUrl} txt={props.beianName} />
    </div>
  );
};
