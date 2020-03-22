import React from 'react';

import Logo from '../images/hero-logo-blue.svg';

function Footer() {
	return (
        <section className="section footer">
            <object className="footer-logo" data={Logo} type="image/svg+xml" />
        </section>
	);
}

export default Footer;
