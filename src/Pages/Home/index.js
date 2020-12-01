import React from 'react';

import Layout from './../../core/Layout';
import Carousel from './../../core/Carousel';
import CardOnlyHeader from './../../core/CardOnlyHeader';

import { getSlideImages } from './_slide';

import add_left_image from './images/add_left.png';
import add_right_image from './images/add_right.png';
import profile_image from './images/profile.png';
import ask_question_to_experts_image from './images/ask_question_to_experts.png';

const slide_images = getSlideImages();
const total_number_of_slide_images = slide_images.length;


const ButtonForAskQuestionToExperts = () => {
    return (
        <button className="btn btn--ask-a-question">
            <span>Ask Question to Experts</span>
            <img src={ask_question_to_experts_image} alt="ask question to experts" />
        </button>
    )
}

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
                    <CardOnlyHeader
                        image={profile_image}
                        headline={"Ask questions about Pre-pregnancy"}
                    >
                        {ButtonForAskQuestionToExperts()}
                    </CardOnlyHeader>
                </div>

                <div className="main-right">
                    <img src={add_right_image} alt="add" />
                </div>
            </div>
        </Layout>
    )
}
export default Home;