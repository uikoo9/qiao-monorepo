// react
import React from 'react';

// css
import './article.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * article
 */
export const Article = (props) => {
    colorLog('qiao-ui/pc/article: render');

    return (
        <div className="article-container">
            {
                props.title ? <div className="article-title">{props.title}</div> : null
            }
            {
                props.date ? <div className="article-date">{props.date}</div> : null
            }
            {
                props.times ? <div className="article-times">阅读{props.times}次</div> : null
            }
            {
                props.content ? <div className="article-content" dangerouslySetInnerHTML={{ __html: props.content }} /> : null
            }
            {
                props.children
            }
        </div>
    );
};