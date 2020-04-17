import React, { Component } from 'react';

import axios from 'axios';

class ReviewCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { reviews: [] }
    }

    componentDidMount() {
        axios({
			method: 'get',
			url: 'https://us-central1-locker-8bd45.cloudfunctions.net/getReviews',
			config: {
				headers: {
					'Content-Type': 'application/json'
				}
			},
		})
		.then((res) => this.setState({ reviews: res.data.reviews.reverse() }));
    }

    render() {
        const { reviews } = this.state;
        const carouselWidth = reviews.length * 200;

        return (
            <section style={{ maxWidth: 'none' }}>
                <div
                    id="carousel"
                    className="reviews-carousel"
                    style={{ width: carouselWidth }}
                >
                    {reviews.map((r, i) => <div className="review" key={i}><p>{r.review}</p><p>{r.name}</p></div> )}
                </div>
            </section>
        );
    }
}

export default ReviewCarousel;
