import React from 'react';
import Filter from '../filter/filter';
import ReturnHome from '../returnHome/returnHome';
import './css/breadCrumbs.css';

const BreadCrumbs = (props) => {
	return (
		<section id="breadCrumbs">
			<div style={{ justifyContent: props.justifyContent }} className="breadcrumbs-wrapper">
				{props.children}
			</div>
		</section>
	);
};

export default BreadCrumbs;
