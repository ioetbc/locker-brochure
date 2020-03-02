import React from 'react';
import logo from './logo.svg';
import './App.scss';
import file from './app.zip';
import Logo from './images/hero-logo.svg';
import Video from './images/Webvideo.mp4';
import Background from './images/background.svg'

function App() {
	return (
		<div className="app">
		<div className="umm">
			<object className="background" data={Background} type="image/svg+xml" />
			</div>

			<header>
				<div className="hero-container">
					<object className="hero-logo" data={Logo} type="image/svg+xml" />
					<p className="hero-sub">An application that will lock<br />your computer seconds after<br />you leave your desk</p>
					<a className="hero-button" href={file} download="">Download for IOS</a>
				</div>
			</header>

			<section className="who-container">
				<h3 className="heading">Who's it for?</h3>
				<p className="sub-text">Designed for offices that deal with sensitive infomation or have to adhere to iso9000 regulations, WorkLock will effectively lock a computer in the case of an employee forgetting to lock their computer when leaving their desk.</p>
			</section>

			<section className="who-container">
				<h3 className="heading">How does it work?</h3>
				<div className="who-video">
				<video width="100%" height="100%" controls autoplay>
					  <source src={Video} type="video/mp4"></source>
				</video>
				</div>
			</section>
		</div>
	);
}

export default App;
