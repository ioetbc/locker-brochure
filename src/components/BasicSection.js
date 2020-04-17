import React, { Component, Fragment } from 'react';
import LazyLoad from 'react-lazyload';

import PhatLine from '../images/phat-line.svg';

class BasicSection extends Component {
    render() {
        const { text } = this.props;

        return (
            <div style={{ position: 'relative' }}>
                <section
                    id="section-one"
                    className="section generic"
                    style={{
                        marginBottom: '340px',
                        zIndex: 1,
                        background: 'transparent'
                    }}
                >
                    <h3 className="heading" style={{ color: 'blue' }}>What's it for?</h3>
                    <p className="sub-text">{text}</p>
                </section>
                <div className="divider-lol"></div> 
            </div>
        );
    }
	
}

export default BasicSection;
