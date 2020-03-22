import React from 'react';

import Menu from '../components/Menu';

import DownloadIcon from '../images/download-icon.svg';
import File from '../dist.zip';
import Logo from '../images/hero-logo.svg';

function BasicSection({ updateCounter }) {
	return (
        <header>
            <Menu />
            <div className="content">
                <object className="hero-logo" data={Logo} type="image/svg+xml" />
                <p className="hero-sub">An application that locks your Mac seconds after you walk away from your desk.</p>
                <div className="hero-button">
                    <img className="icon" src={DownloadIcon}></img>
                    <a
                        href={File}
                        download="work lock"
                        onClick={updateCounter}
                    >
                        Download for Mac
                    </a>
                </div>
            </div>
        </header>
	);
}

export default BasicSection;
