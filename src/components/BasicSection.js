import React from 'react';
import PhatLine from '../images/phat-line.svg';

function BasicSection({ title, text }) {
	return (
        <section className="section">
            <h3 className="heading">{title}</h3>
            <p className="sub-text">{text}</p>
            <img className="divider-line" src={PhatLine} />
        </section>
	);
}

export default BasicSection;
