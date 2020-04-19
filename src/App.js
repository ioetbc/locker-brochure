import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import { includes } from 'lodash';

import Header from './components/Header';
import BasicSection from './components/BasicSection';
import ReviewCarousel from './components/ReviewCarousel';
import CustomerLogos from './components/CustomerLogos';
import DownloadCounter from './components/DownloadCounter';
import Footer from './components/Footer';
import Video from './components/Video';
import Donate from './components/Donate';
import Generic from './components/Generic';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { count: 0, video: false, showMoreLogos: false };
		this.updateCounter = this.updateCounter.bind(this);
		this.fadeInSections = this.fadeInSections.bind(this);
	}

	componentDidMount() {
		axios({
			method: 'get',
			url: 'https://us-central1-locker-8bd45.cloudfunctions.net/getDownloadCount',
			config: {
				headers: {
					'Content-Type': 'application/json'
				}
			},
		})
		.then((res) => this.setState({ currentCount: res.data.count }))

		this.fadeInSections();
	}

	fadeInSections() {
		const sections = document.querySelectorAll('.generic');
		const options = { threshold: .6 };

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(element => {
				if (element.isIntersecting) {
					element.target.classList.toggle('fade-in');

					if (includes(element.target.classList, 'video-section')) {
						this.setState({ video: document.getElementById('explainer-video') });
					}

					observer.unobserve(element.target)
				}
			});
		}, options);

		sections.forEach(section => observer.observe(section));
	}

	updateCounter() {
		this.setState({ currentCount: this.state.currentCount + 1 }, () => {
			return axios({
				method: 'post',
				url: 'https://us-central1-locker-8bd45.cloudfunctions.net/increaseDownloadCount',
				config: {
					headers: {
						'Content-Type': 'application/json'
					}
				},
				data: {
					count: this.state.currentCount,
				},
			});
		})
	}
	
	addReview(name, review) {
		axios({
			method: 'post',
			url: 'https://us-central1-locker-8bd45.cloudfunctions.net/addReview',
			config: {
				headers: {
					'Content-Type': 'application/json'
				}
			},
			data: {
				review: { name, review },
			},
		});
	}

	render() {
		const { video, currentCount } = this.state;
		return (
			<div className="app">
				<Header
					updateCounter={this.updateCounter}
				/>

				<Video
					video={video}
				/>
	
				<BasicSection
					text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>

				<Generic
					backgroundColor="white"
					title="Who's using it?"
				>
					<CustomerLogos
						getCustomerLogoWrapperHeight={() => this.setState({ showMoreLogos: !this.state.showMoreLogos })}
						showMoreLogos={this.state.showMoreLogos}
					/>
				</Generic>

				<Generic
					backgroundColor="blue"
					title="Reviews"
					cta="Submit Review"
					addReview={this.addReview}
				>
					<ReviewCarousel />
				</Generic>

				<DownloadCounter
					count={currentCount}
				/>

				<Generic
					backgroundColor="white"
					title="Donate"
				>
					<Donate />
				</Generic>

				<Footer />
			</div>
		);
	}

}

export default App;
