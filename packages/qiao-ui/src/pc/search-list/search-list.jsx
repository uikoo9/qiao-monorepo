// react
import React from 'react';

// css
import './search-list.scss';

/**
 * search list
 */
export class SearchList extends React.Component {
    render() {
        const searchRes = this.props.searchRes;
        const searchResKeys = Object.keys(searchRes);
        const searchList = searchResKeys && searchResKeys.map((skey, index) => {
            const searchResList = searchRes[skey];
            const searchResItems = searchResList && searchResList.map((item, j) => {
                return <div key={j} className="item">
                    <div className="item-title">
                        <a target="_blank" href={item.links.npm}>{item.name}</a>
                    </div>
                    <div className="item-desc">{item.description}</div>
                    <div className="item-other">
                        {
                            item.links.repository ? <a target="_blank" href={item.links.repository}>Github / </a> : null
                        }
                        {item.version} / {item.date ? item.date.split('T')[0] : null}
                    </div>
                </div>
            });

            return <div key={index} className="search-list-item">
                <div className="title">{skey}</div>
                {searchResItems}
            </div>
        });

        return <div className="search-list">{searchList}</div>;
    }
}