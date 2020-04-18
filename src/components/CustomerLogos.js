import React, { Fragment } from 'react';

import ByMilesLogo from '../images/logos/bymiles.png';
import GoogleLogo from '../images/logos/google.png';
import PayPalLogo from '../images/logos/paypal.png';
import TeslaLogo from '../images/logos/tesla.png';
import TechCrunchLogo from '../images/logos/techcrunch.png';
import AmazonLogo from '../images/logos/amazon.png';

import DownloadIcon from '../images/download-icon.svg';
import Chevron from '../images/chevron.svg';

function CusomerLogos({ showMoreLogos, getCustomerLogoWrapperHeight }) {
	return (
        <Fragment>
            <div className={`logo-wrapper ${showMoreLogos && 'show'}`}>
                <img src={ByMilesLogo}></img>
                <img src={GoogleLogo}></img>
                <img src={PayPalLogo}></img>
                <img src={TechCrunchLogo}></img>
                <img src={PayPalLogo}></img>
                <img src={TechCrunchLogo}></img>
                <img src={ByMilesLogo}></img>
                <img className="slack" src={AmazonLogo}></img>
            </div>

            <button
                className="show-more-button"
                style={{ background: 'transparent' }}
                onClick={() => getCustomerLogoWrapperHeight()
            }>
                <a>{showMoreLogos ? 'show less' : 'show more'}</a>
                <img className="icon" src={Chevron} style={{transform: showMoreLogos ? 'scale(-1)' : '', marginTop: showMoreLogos ? '-4px' : ''}}></img>
            </button>
        </Fragment>
	);
}

export default CusomerLogos;
