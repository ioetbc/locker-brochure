import React, { Fragment } from 'react';

function Donate() {
	return (
        <Fragment>
            <div className="donate-wrapper">
                <div>
                    <p className="sub-text" style={{ maxWidth: '480px', margin: '0px' }}>Donate £2.00 to pay for Will's next meal.</p>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                    </div>
                </div>
                <div>
                <div className="hero-button donate">
                    <a download="work lock">paypal</a>
                </div>  		
                <div className="hero-button donate">
                    <a download="work lock">credit / debit card</a>
                </div>  		
                <div className="hero-button donate">
                    <a download="work lock">monzo</a>
                </div>  	
                </div>
            </div>
            <p className="sub-text" style={{ marginTop: '24px' }}>ioetbc@gmail.com</p>
        </Fragment>
	);
}

export default Donate;
