// react
import React from 'react';

// css
import './search-box.scss';

/**
 * search box
 */
export class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
        };

        console.log('qiao-ui/pc/search-box: constructor');
    }

    searchChange = (e) => {
        this.setState({
            searchText: e.target.value
        });

        console.log('qiao-ui/pc/search-box: searchChange');
    }

    searchClick = () => {
        const searchText = this.state.searchText;
        this.props.searchClick(searchText);

        console.log('qiao-ui/pc/search-box: searchClick');
    }

    render() {
        console.log('qiao-ui/pc/search-box: render');

        return <div className="search-box">
            <div className="input">
                <input type="text" 
                    placeholder={this.props.placeholder} 
                    onChange={this.searchChange}
                    value={this.state.searchText}
                />
            </div>
            <div className="button" onClick={this.searchClick}>{this.props.searchBtnText}</div>
        </div>;
    }
}