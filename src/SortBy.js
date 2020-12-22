import React from 'react';

class SortBy extends React.PureComponent {
    render() {
        return (
            <ul className="header--sorting">
                <li>Sort by </li>
                <li>
                    <select className="header--sorting-selector" onChange={this.props.onSelect}>
                        <option>Alphabet</option>
                        <option>Rating</option>
                    </select>
                </li>
            </ul>
        );
    }
}

export default SortBy;
