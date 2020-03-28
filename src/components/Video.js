import React from 'react';

import VideoFile from '../images/explainer-video.mp4';

const Video = ({ video }) => {
    if (video) video.play();

	return (
        <section className="section video-section">				
            <div className="video">				
                <video id="explainer-video" width="100%" height="100%" controls={false} muted loop={true}>	
                    <source src={VideoFile} type="video/mp4"></source>					
                </video>	
            </div>		
        </section>
	);
}

export default Video;
