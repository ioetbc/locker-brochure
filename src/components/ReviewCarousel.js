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
        const carouselWidth = document.getElementById('carousel').clientWidth;
        this.setState({ carouselWidth });

        setInterval(() => {
            this.setState({ translateInt: this.state.translateInt + 100 });
        }, 3000);
    }

    render() {
        const { translateInt, carouselWidth } = this.state;
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
                    <div className="review">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="review">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iusto vero et quam mollitia incidunt.</p>
                    </div>
                    <div className="review">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing perspiciatis.</p>
                    </div>
                    <div className="review">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iusto vero et quam mollitia incidunt temporibus ducimus repellendus doloremque.</p>
                    </div>
                    <div className="review">
                        <p>Lorem ipsum dolor.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ReviewCarousel;
