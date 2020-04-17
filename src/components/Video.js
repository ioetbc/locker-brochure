import React from 'react';

import VideoFile from '../images/explainer-video.mp4';

const Video = ({ video }) => {
    console.log('video', video);
    if (video) video.play();

	return (
        <React.Fragment>			
                <div className="video generic video-section section">			
                    <video id="explainer-video" width="100%" height="100%" controls={false} muted loop={true}>	
                        <source src={VideoFile} type="video/mp4"></source>					
                    </video>	
                </div>
        </React.Fragment>
	);
}

export default Video;
