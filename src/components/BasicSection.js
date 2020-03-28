import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import PhatLine from '../images/phat-line.svg';

class BasicSection extends Component {
    render() {
        const { title, text } = this.props;

        return (
            <section className="section" id="section-one">
                <h3 className="heading">{title}</h3>
                <p className="sub-text">{text}</p>
                {/* <img className="divider-line" src={PhatLine} /> */}
                {/* <div className="divider-lol"></div>  */}
            </section>
        );
    }
	
}

export default BasicSection;
