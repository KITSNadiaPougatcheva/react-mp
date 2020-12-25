import React from 'react';

class SortBy extends React.PureComponent {
    render() {
        return (
            <ul className="header--sorting">
                <li>Sort by </li>
                <li>
                    <select className="header--sorting-selector" 
                    onChange={e => this.props.sortBy(e.currentTarget.value)}>
                        <option>Alphabet</option>
                        <option>Rating</option>
                    </select>
                </li>
            </ul>
        );
    }
}

export default SortBy;
