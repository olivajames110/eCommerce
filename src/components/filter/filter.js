import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './css/filter.css';
const Filter = () => {
	const [ filterActive, setFilterActive ] = useState(false);
	const [ filterType, setFilterType ] = useState('Lowest Price');
	const filterDropdown = (
		<div className="filter-options-container ">
			<ul className="options">
				<li onClick={() => setFilterType('Lowest Price')} className="option">
					Lowest Price{' '}
				</li>
				<li onClick={() => setFilterType('Highest Price')} className="option">
					Highest Price
				</li>
				<li onClick={() => setFilterType('Newest')} className="option">
					Newest
				</li>
				<li onClick={() => setFilterType('Oldest')} className="option">
					Oldest
				</li>
			</ul>
		</div>
	);
	return (
		<div className="filter-wrapper">
			<div
				onClick={() => setFilterActive(!filterActive)}
				className={`filter-container  ${filterActive ? 'filter-active' : ''}`}
			>
				<div className="filter-title-container">
					<span className="filter-title">Filter by:</span>
					<span className="filter-value">{filterType}</span>
					<span className="filter-icon">
						<FontAwesomeIcon icon={faChevronDown} size="xs" />
					</span>
				</div>
				{filterActive ? filterDropdown : ''}
			</div>
		</div>
	);
};

export default Filter;
