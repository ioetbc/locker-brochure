import React from 'react';

const getFontColor = (backgroundColor) => {
    if (backgroundColor === 'white') {
        return 'blue';
    }
}

const Generic = ({ children, backgroundColor, title, cta, handleReviewForm }) => {
    // console.log('handleReviewForm cunt', handleReviewForm)
    return (
        <section className={`generic ${cta && 'cta'}`} style={{ background: backgroundColor }}>
            <div className="padding">
                <div>
                {title &&
                    <h3 style={{ color: getFontColor(backgroundColor) }} className="heading">{title}</h3>
                }
                {cta &&
                    <button
                        className="hero-button reviews"
                        onClick={() => handleReviewForm()}
                    >
                        {cta}
                    </button>
                }
                </div>
                {children}
            </div>
        </section>
    );
}

export default Generic;
