import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs';
import ReturnHome from '../../components/returnHome/returnHome';
import './css/productDetail.css';

const ProductDetail = () => {
	let ENDPOINT = 'http://localhost:5000/detail';
	let [ products, setProduct ] = useState([]);
	let [ isLoading, setIsLoading ] = useState(false);

	const getProduct = async () => {
		console.log('11111');
		setIsLoading(true);
		const res = await axios.get('http://localhost:5000/detail?id=7');
		console.dir(res.data);
		setProduct(res.data);
		setIsLoading(false);
	};

	const loader = <div className="s">{isLoading ? <span className="loader">LOADING</span> : ''}</div>;

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<section id="product-detail">
			<BreadCrumbs justifyContent="space-between">
				<ReturnHome url="/" text="Return to products" iconSize="xs" />
			</BreadCrumbs>
			<div className="product-detail-wrapper">
				<div className="product-images-container">
					<div className="thumbnail-container">
						<div className="thumbnail-img">
							<img
								src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88241654_136875077654303_6528774686701563095_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=2plby783w9YAX-jLGjq&oh=343b2cc1af2c4af56d49ea0cd88a74a2&oe=5EB5F7C8"
								alt=""
								srcset=""
							/>
						</div>
						<div className="thumbnail-img">
							<img
								src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88241654_136875077654303_6528774686701563095_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=2plby783w9YAX-jLGjq&oh=343b2cc1af2c4af56d49ea0cd88a74a2&oe=5EB5F7C8"
								alt=""
								srcset=""
							/>
						</div>
						<div className="thumbnail-img">
							<img
								src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88241654_136875077654303_6528774686701563095_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=2plby783w9YAX-jLGjq&oh=343b2cc1af2c4af56d49ea0cd88a74a2&oe=5EB5F7C8"
								alt=""
								srcset=""
							/>
						</div>
					</div>
					<div className="primary-img">
						<img
							src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88241654_136875077654303_6528774686701563095_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=2plby783w9YAX-jLGjq&oh=343b2cc1af2c4af56d49ea0cd88a74a2&oe=5EB5F7C8"
							alt=""
							srcset=""
						/>
					</div>
				</div>
				<div className="product-details-container">
					<h1 className="product-detail-title">Title</h1>
					<div className="product-detail-desc">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, mollitia nemo possimus
						quibusdam perferendis error esse cupiditate autem excepturi a, commodi odio repudiandae placeat
						deleniti quaerat.
					</div>
					<div className="product-detail-price">$100</div>
					<button>Add to cart</button>
				</div>
			</div>
		</section>
	);
};

export default ProductDetail;
