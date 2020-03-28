import React from 'react';

import VideoFile from '../images/explainer-video.mp4';

function Donate() {
	return (
        <section className="section">				
            <h3 className="heading">donate</h3>	
            <p className="sub-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="hero-button donate">
                <a download="work lock">paypal</a>
            </div>  		
            <div className="hero-button donate">
                <a download="work lock">credit / debit card</a>
            </div>  		
            <div className="hero-button donate">
                <a download="work lock">monzo</a>
            </div>  	
            <p className="sub-text" style={{ marginTop: '24px' }}>ioetbc@gmail.com</p>
        </section>
	);
}

export default Donate;
