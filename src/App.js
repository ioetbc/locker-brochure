import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import file from './dist.zip';
import Logo from './images/hero-logo.svg';
import Video from './images/explainer-video.mp4';
import Background from './images/background.svg';
import DownloadIcon from './images/download-icon.svg';
import BasicSection from './components/BasicSection';
import Menu from './components/Menu';
import DownloadCounter from './components/DownloadCounter';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { count: 0 };
		this.updateCounter = this.updateCounter.bind(this);
	}

	updateCounter() {
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		const { count } = this.state;

		return (
			<div className="app">
				<header>
					<Menu />
					<div className="content">
						<object className="hero-logo" data={Logo} type="image/svg+xml" />
						<p className="hero-sub">An application that locks your Mac seconds after you walk away from your desk.</p>
						<div className="hero-button">
							<img className="icon" src={DownloadIcon}></img>
							<a
								href={file}
								download="work lock"
								onClick={this.updateCounter}
							>
								Download for Mac
							</a>
						</div>
					</div>
				</header>

				<DownloadCounter
					count={count}
				/>

				<BasicSection
					title="Who's it for?"
					content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>

				<section className="who-container">
					<h3 className="heading">How does it work?</h3>
					{ /* <div className="who-video">
						<video width="100%" height="100%" controls autoplay>
							<source src={Video} type="video/mp4"></source>
						</video>
					</div> */}
				</section>
			</div>
		);
	}

}

export default App;
