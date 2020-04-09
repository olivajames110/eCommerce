import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './css/returnHome.css';
const returnHome = ({ text, url, iconSize }) => {
	return (
		<div className="return-home-wrapper">
			<a href={url}>
				<span className="arrow-container">
					<FontAwesomeIcon size={iconSize} icon={faArrowLeft} />
				</span>
				<span>{text}</span>
			</a>
		</div>
	);
};

export default returnHome;
