import React from 'react';
import './css/product.css';

const Product = ({ id, url, title, price, img }) => {
	return (
		<div className="product-wrapper">
			<a href={`/detail/?${id}`}>
				<img className="product-img" src={url} alt="" />
				<h3 className="product-title">{title}</h3>
				<span className="product-price">{price}</span>
			</a>
		</div>
	);
};

export default Product;
