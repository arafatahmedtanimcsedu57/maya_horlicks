import React from 'react';

import Layout from './../../core/Layout';
import Carousel from './../../core/Carousel';

import { getSlideImages } from './_slide';

import add_left_image from './images/add_left.png';
import add_right_image from './images/add_right.png';

const slide_images = getSlideImages();
const total_number_of_slide_images = slide_images.length;

const Home = () => {
    return (
        <Layout>
            <div
                className="section section--carousel"
            >
                <Carousel
                    slide_images={slide_images}
                    total_number_of_slide_images={total_number_of_slide_images}
                />
            </div>

            <div className="section section--main">
                <div className="main-left">
                    <img src={add_left_image} alt="add" />
                </div>
                <div className="main-mid">

                </div>

                <div className="main-right">
                    <img src={add_right_image} alt="add" />
                </div>
            </div>
        </Layout>
    )
}
export default Home;