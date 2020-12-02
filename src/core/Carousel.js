import React from 'react';
import Carousel from 'nuka-carousel';

import next_arrow_image from './images/next_arrow.png';
import pre_arrow_image from './images/pre_arrow.png';

const CustomCarousel = ({ slide_images, total_number_of_slide_images }) => {
    return (

        <Carousel
            autoplay={true}
            wrapAround={true}
            // autoplayReverse={true}

            renderCenterLeftControls={({ previousSlide }) => (
                <button
                    className="btn btn--carousel-direction"
                    onClick={previousSlide}
                >
                    <img src={pre_arrow_image} alt="previous slide" />
                </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button
                    className="btn btn--carousel-direction"
                    onClick={nextSlide}
                >
                    <img src={next_arrow_image} alt="next slide" />
                </button>
            )}
        >
            {slide_images.map((image, index) =>

                <img
                    key={`${index}-image`}
                    className="slide__image"
                    style={{
                        "width": "100%",
                        // "height": "532px"
                    }}
                    src={image}
                    alt="slide image"
                />
            )}
        </Carousel>

    )
}

export default CustomCarousel