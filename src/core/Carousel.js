import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';


const Carousel = () => {
    return (
        <div className="section section--carousel">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={20}
                totalSlides={3}
                // infinite={true}
                isPlaying={true}
                playDirection="backward"
                className="carousel carousel--home"
            >
                <Slider
                    className="carousel__slider slider"
                >
                    {/* loop will use here */}
                    <Slide
                        index={0}
                        className="slider__slide"
                    >
                        I am the first Slide.
                    </Slide>
                    <Slide
                        index={1}
                        className="slider__slide"
                    >
                        I am the second Slide.
                    </Slide>
                    <Slide
                        index={2}
                        className="slider__slide"
                    >
                        I am the third Slide.
                    </Slide>
                </Slider>

                <ButtonBack className="btn btn--carousel-direction btn--pre-slide">Pre</ButtonBack>
                <ButtonNext className="btn btn--carousel-direction btn--next-slide">Next</ButtonNext>
                <DotGroup className="btn btn--carousel-dot" />
            </CarouselProvider>
        </div>
    )
}

export default Carousel