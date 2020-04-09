import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './screens/home/home';
// import Product from './components/product/product';
// import Filter from './components/filter/filter';
import ProductDetail from './screens/productDetail/productDetail';
import Cart from './components/cart/cart';
import Footer from './components/footer/footer';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/cart" component={Cart} />
					<Route path="/detail" component={ProductDetail} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
