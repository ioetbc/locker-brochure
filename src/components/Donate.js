import React, { Fragment } from 'react';

function Donate() {
	return (
        <Fragment>
            <div className="donate-wrapper">
                <div>
                    <p className="sub-text" style={{ maxWidth: '480px', margin: '0px' }}>
                        Feed a hungry will's need for snax to keep the app going. Donate all your money to him.
                    </p>
                </div>
                <div>
                <div className="hero-button donate">
                    <a>paypal</a>
                </div>  		
                <div className="hero-button donate">
                    <a>credit / debit card</a>
                </div>  		
                <div className="hero-button donate">
                    <a>monzo</a>
                </div>  	
                </div>
            </div>
            <p className="sub-text" style={{ marginTop: '24px' }}>ioetbc@gmail.com</p>
        </Fragment>
	);
}

export default Donate;
