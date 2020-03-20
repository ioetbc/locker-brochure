import React from 'react';

function BasicSection({ title, content }) {
	return (
        <section className="section">
            <h3 className="heading">{title}</h3>
            <p className="sub-text">{content}</p>
        </section>
	);
}

export default BasicSection;
