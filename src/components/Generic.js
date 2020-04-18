import React, { Component, Fragment } from 'react';

const getFontColor = (backgroundColor) => {
    if (backgroundColor === 'white') {
        return 'blue';
    }
}

class Generic extends Component {
    constructor(props) {
        super(props);
        this.state = { showReviewForm: false };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { children, backgroundColor, title, cta, addReview } = this.props;
        const { showReviewForm, name, review } = this.state;

        return (
            <Fragment>
                <section className={`generic ${cta && 'cta'}`} style={{ background: backgroundColor }}>
                    <div className="padding">
                        <div>
                        {title &&
                            <h3 style={{ color: getFontColor(backgroundColor) }} className="heading">{title}</h3>
                        }
                        {cta &&
                            <button
                                className="hero-button reviews"
                                onClick={() => this.setState({ showReviewForm: true })}
                            >
                                {cta}
                            </button>
                        }
                        </div>
                        {children}
                    </div>
                </section>

                {showReviewForm &&
                    <div className="reviews-form">
                        <form
                            className="content-center"
                            onSubmit={(e) => {
                                e.preventDefault()
                                addReview(name, review)
                            }}
                        >

                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input
                                    className='text-field--input'
                                    name="name"
                                    id="name"
                                    placeholder=' '
                                    type='text'
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <label className='text-field--label' for='name'>Name / Organisation</label>
                            </div>
                        </div>

                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input
                                    className='text-field--input'
                                    name="review"
                                    id="review"
                                    placeholder=' '
                                    type='text'
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <label className='text-field--label' for='review'>Review</label>
                            </div>
                        </div>

                        <button
                        type="submit"
                        id='submitButton'
                    >
                        pay now
                    </button>
                    </form>
                    </div>
                }
            </Fragment>
        );

    }
}

export default Generic;
