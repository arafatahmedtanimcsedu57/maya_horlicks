import React from 'react';

import Layout from './../../core/Layout';
import Carousel from './../../core/Carousel';

import { getSlideImages } from './_slide';

const slide_images = getSlideImages();
const total_number_of_slide_images = slide_images.length;

const Home = () => {
    return (
        <Layout>
            <Carousel
                slide_images={slide_images}
                total_number_of_slide_images={total_number_of_slide_images}
            />
        </Layout>
    )
}
export default Home;