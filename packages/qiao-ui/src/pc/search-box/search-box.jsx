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

        this.searchChange = this.searchChange.bind(this);
        this.searchClick = this.searchClick.bind(this);
    }

    searchChange(e){
        this.setState({
            searchText: e.target.value
        });
    }

    searchClick() {
        const searchText = this.state.searchText;
        this.props.searchClick(searchText);
    }

    render() {
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