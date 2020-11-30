import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';


const Carousel = ({ slide_images, total_number_of_slide_images }) => {
    return (
        <div
            className="section section--carousel"
        // style={{ "width": "100%", "height": "200px" }}
        >
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={40}
                totalSlides={total_number_of_slide_images}
                // infinite={true}
                isPlaying={true}
                playDirection="backward"
                className="carousel carousel--home"
            >
                <Slider
                    className="carousel__slider slider"
                >
                    {slide_images.map((image, index) =>
                        <Slide
                            key={`${index}-slide`}
                            index={index}
                            className="slider__slide slide"
                        >
                            <img className="slide__image" style={{ "width": "100%" }} src={image} alt="slide image" />
                        </Slide>
                    )}

                </Slider>

                <ButtonBack className="btn btn--carousel-direction btn--pre-slide">Pre</ButtonBack>
                <ButtonNext className="btn btn--carousel-direction btn--next-slide">Next</ButtonNext>
                <DotGroup className="btn btn--carousel-dot" />
            </CarouselProvider>
        </div>
    )
}

export default Carousel