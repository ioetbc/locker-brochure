import React from 'react';

import Logo from '../images/hero-logo-blue.svg';
import DownloadIcon from '../images/download-icon-white.svg';
import File from '../dist.zip';

function Footer({ updateCounter }) {
	return (
        <section className="footer">
            <object className="footer-logo" data={Logo} type="image/svg+xml" />
            <div className="hero-button footer-button">
                <img className="icon" src={DownloadIcon}></img>
                <a
                    href={File}
                    download="work lock"
                    onClick={updateCounter}
                    style={{ color: 'white', margin: 0 }}
                >
                    Download for Mac
                </a>
            </div>
        </section>
	);
}

export default Footer;
