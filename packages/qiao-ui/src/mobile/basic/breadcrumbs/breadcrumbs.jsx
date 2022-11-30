// react
import React from 'react';

// css
import './breadcrumbs.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * mobile breadcrumbs
 */
export const MobileBreadcrumbs = (props) => {
  colorLog('qiao-ui/mobile/breadcrumbs: render');

  const breadcrumbs = props.breadcrumbs;
  const breadcrumbsActiveId = props.breadcrumbsActiveId;
  const divs =
    breadcrumbs &&
    breadcrumbs.map((breadcrumb, index) => {
      if (!breadcrumb.id || !breadcrumb.name) return;

      return (
        <div className="breadcrumb" key={index}>
          <div
            style={{ width: props.width }}
            className={breadcrumbsActiveId == breadcrumb.id ? 'item active' : 'item'}
            onClick={() => {
              props.onClick(breadcrumb.id);
            }}
          >
            {breadcrumb.name}
          </div>

          {index + 1 == breadcrumbs.length ? null : <div style={{ width: props.width }}>/</div>}
        </div>
      );
    });

  return <div className="breadcrumbs">{divs}</div>;
};
