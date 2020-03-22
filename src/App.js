import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';

import Header from './components/Header';
import BasicSection from './components/BasicSection';
import DownloadCounter from './components/DownloadCounter';
import ReviewCarousel from './components/ReviewCarousel';
import CustomerLogos from './components/CustomerLogos';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { count: 0 };
		this.updateCounter = this.updateCounter.bind(this);
	}

	componentDidMount() {
		const shit = axios({
			method: 'get',
			url: 'https://us-central1-locker-8bd45.cloudfunctions.net/getDownloadCount',
			config: {
				headers: {
					'Content-Type': 'application/json'
				}
			},
		})
		.then((res) => console.log('hahaha what', res))
	}

	updateCounter() {
		this.setState({ count: this.state.count + 1 }, () => {
			return axios({
				method: 'post',
				url: 'https://us-central1-locker-8bd45.cloudfunctions.net/increaseDownloadCount',
				config: {
					headers: {
						'Content-Type': 'application/json'
					}
				},
				data: {
					count: this.state.count,
				},
			});
		})
	}

	render() {
		const { count } = this.state;

		return (
			<div className="app">
				<Header
					updateCounter={this.updateCounter}
				/>
				{/* <DownloadCounter
					count={count}
				/> */}

				<BasicSection
					title="what"
					text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					divider={true}
				/>

				<CustomerLogos />

				<ReviewCarousel />

				<Footer />

				{/* Support the app and donate 
				1. paypal
				2. bitcoin
				4. card
				5. find aload of alternatives

				get in touch
				
				like what you see? > download button
				*/}


				{/* TODO make the sections slide in as you scroll */}
				{/* TODO add in left and right arrows to the carousel */}



			</div>
		);
	}

}

export default App;
