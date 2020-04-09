import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs';
import Filter from '../../components/filter/filter';
import ReturnHome from '../../components/returnHome/returnHome';
import Product from '../../components/product/product';
import './css/home.css';

const Home = (props) => {
	let handleClick = (id) => {
		props.addToCart(id);
	};

	let itemList = props.items.map((item) => {
		return (
			<div
				onClick={() => {
					console.log('click');

					handleClick(item.id);
				}}
				className="item"
			>
				<Product id={item.id} url={item.url} title={item.title} price={item.price} />
			</div>
		);
	});
	return (
		<div className="home-screen-wrapper">
			<BreadCrumbs justifyContent="flex-end">
				<Filter />
			</BreadCrumbs>
			<main>
				<section>
					<div className="item-container">{itemList}</div>
				</section>
			</main>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart : (id) => {
			dispatch(addToCart(id));
		}
	};
};

const mapStateToProps = (state) => {
	return {
		items   : state.items,
		current : 'currentttt'
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
