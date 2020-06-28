import React, { useEffect, Fragment } from 'react';



function Donate() {
    useEffect(() => {
        var loadPaypalScript = function (src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(tag);
          }
        
          loadPaypalScript(`https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=GBP&disable-funding=credit,card`);

          window.paypal.Buttons({
            style: {
                shape: 'pill',
                color: 'gold',
                layout: 'horizontal',
                label: 'paypal',
                
            },
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '1'
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                });
            }
        }).render('#paypal-button-container');

    }, []);

	return (
        <Fragment>
            <div className="donate-wrapper">
                <div>
                    <p className="sub-text" style={{ maxWidth: '480px' }}>
                        Feed a hungry will's need for snax to keep the app going. Donate all your money to him.
                    </p>
                </div>
                <div className="paypal-wrapper">
                    <div id="paypal-button-container"></div>
                </div>
            </div>
            <a className="sub-text" style={{ marginTop: '24px', color: 'blue' }} href="mailto:ioetbc@gmail.com" target="_blank" >ioetbc@gmail.com</a>
        </Fragment>
	);
}

export default Donate;
