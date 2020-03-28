import React, { Component } from 'react';

class ReviewCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { translateInt: 0 }
        this.transformCarousel = this.transformCarousel.bind(this);
    }

    componentDidMount() {
        this.transformCarousel();
    }

    transformCarousel() {
        setInterval(() => {
            this.setState({ translateInt: this.state.translateInt + 100 });
        }, 3000);
    }

    render() {
        const { translateInt } = this.state;
        const reviews = [
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iusto vero et quam mollitia incidunt.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing perspiciatis.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iusto vero et quam mollitia incidunt temporibus ducimus repellendus doloremque.',
            'Lorem ipsum dolor.',
            'Lorem ipsum dolor, sit amet elit.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iusto vero et quam mollitia incidunt. consectetur adipisicing perspiciatis.',
            'Lorem ipsum dolor.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iusto vero et ducimus repellendus doloremque.'
        ]

        const carouselWidth = reviews.length * 200;

        let translateValue;

        if (translateInt < carouselWidth) {
            translateValue = `translateX(-${translateInt}px)`;
        } else {
            translateValue = 'translateX(0px)';
            this.setState({ translateInt: 0});
        }

        return (
            <section className="section">
                <h3 className="heading">reviews.</h3>
                <div
                    id="carousel"
                    className="reviews-carousel"
                    style={{ transform: translateValue }}
                >
                    {reviews.map((r, i) => <div className="review" key={i}><p>{r}</p></div>)}
                </div>
            </section>
        );
    }
}

export default ReviewCarousel;
