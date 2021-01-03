import React, { useCallback } from 'react';

function SortBy(props) {
    const callback = useCallback(e => props.sortBy(e.currentTarget.value))
    return (
        <ul className="header--sorting">
            <li>Sort by </li>
            <li>
                <select className="header--sorting-selector" 
                onChange={callback}>
                    <option value="title">Alphabet</option>
                    <option value="vote_average">Rating</option>
                </select>
            </li>
        </ul>
    );
}

export default SortBy;
