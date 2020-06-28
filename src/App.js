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

		this.state = { count: 0, video: false, showMoreLogos: false, showReviewForm: false };
		this.updateCounter = this.updateCounter.bind(this);
		this.fadeInSections = this.fadeInSections.bind(this);
		this.handleReviewForm = this.handleReviewForm.bind(this);
	}

	componentDidMount() {
		// TODO get the urk from notesor get from firebase
		axios({
			method: 'get',
			url: '',
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

	handleReviewForm() {
		this.setState({ showReviewForm: !this.state.showReviewForm });
	}

	render() {
		const { video, currentCount, showReviewForm } = this.state;
		// console.log('showReviewForm', showReviewForm)
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
					handleReviewForm={this.handleReviewForm}
				>
					<ReviewCarousel
						handleChange={this.handleChange}
						showReviewForm={showReviewForm}
						addReview={this.addReview}
						handleReviewForm={this.handleReviewForm}
					/>
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

				<Footer
					updateCounter={this.updateCounter }
				/>
			</div>
		);
	}

}

export default App;
