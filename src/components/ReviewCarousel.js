import React, { Component, Fragment } from 'react';

import axios from 'axios';
import CloseIcon from '../images/close-icon.svg';

class ReviewCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { reviews: [] }

		this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        axios({
			method: 'get',
			url: '',
			config: {
				headers: {
					'Content-Type': 'application/json'
				}
			},
		})
        .then((res) => this.setState({ reviews: res.data.reviews.reverse() }));
        
        this.setState({ button: document.getElementById('submitButton') })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
	addReview(name, review) {
        document.getElementById('submitButton').innerHTML = 'Updating';
		axios({
			method: 'post',
			url: '',
			config: {
				headers: {
					'Content-Type': 'application/json'
				}
			},
			data: {
				review: { name, review },
			},
        }).then(() => {
            document.getElementById('submitButton').innerHTML = 'Done';
            setTimeout(() => {
                this.props.handleReviewForm();
            }, 2000)
        });
	}

    render() {
        const { showReviewForm, handleReviewForm } = this.props;
        const { name, review, reviews } = this.state;
        const carouselWidth = reviews.length * 200;

        return (
            <Fragment>
            <section style={{ maxWidth: 'none' }}>
                <div
                    id="carousel"
                    className="reviews-carousel"
                    style={{ width: carouselWidth }}
                >
                    {reviews.map((r, i) => <div className="review" key={i}><p>{r.review}</p><p>{r.name}</p></div> )}
                </div>
            </section>

            {showReviewForm &&
                <div className="reviews-form">
                    <img src={CloseIcon} className="close-icon" onClick={() => handleReviewForm()} />
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.addReview(name, review)
                        }}
                    >

                        <div class="floating-label-wrapper">
                            <input name="name" type="text" required placeholder="Name" onChange={(e) => this.handleChange(e)} />
                        </div>

                        <div class="floating-label-wrapper" style={{ margin: '24px 0' }} onChange={(e) => this.handleChange(e)}>
                            <textarea name="review" type="text" className="review" required resize placeholder="Your review" />
                        </div>

                        <button
                            type="submit"
                            id='submitButton'
                            className="hero-button"
                            style={{ borderColor: 'blue', margin: '0px', width: '120px' }}
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            }
            </Fragment>
        );
    }
}

export default ReviewCarousel;
