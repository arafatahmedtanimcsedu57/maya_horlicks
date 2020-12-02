import React, { useState } from 'react';

import Layout from './../../core/Layout';
import Carousel from './../../core/Carousel';
import Heading from './../../core/heading';
import CardOnlyHeader from './../../core/CardOnlyHeader';
import CardHeaderBody from './../../core/CardHeadBody';
import VideoTabs from './components/videosTabs';
import Add from './../../core/Add';

import { getSlideImages } from './_slide';
import { getFAQList } from './../../helpers/_faq';

import add_left_image from './images/add_left.png';
import add_right_image from './images/add_right.png';
import add_hr_image from './images/add_hr.png';
import profile_image from './images/profile.png';
import ask_question_to_experts_image from './images/ask_question_to_experts.png';
import down_arrow_images from './images/down_arrow.png';
import down_arrow_images_brown from './images/down_arrow_brown.png';
import up_arrow_images_brown from './images/up_arrow_brown.png';

const slide_images = getSlideImages();
const total_number_of_slide_images = slide_images.length;
const faq_list = getFAQList();

const background_colors = ['#FFDBFE', '#C8F7F9', '#D6DEFF']

const ButtonForAskQuestionToExperts = () => {
    return (
        <button className="btn btn--ask-a-question">
            <span>Ask Question to Experts</span>
            <img src={ask_question_to_experts_image} alt="ask question to experts" />
        </button>
    )
}

const ButtonForSeeAnswerOfFAQ = () => {
    return (
        <button className="btn btn--see-answer">
            <span>See Answer</span>
            <img
                src={down_arrow_images}
                alt="see answer"
            />
        </button>
    )
}

const Home = () => {

    const [is_all_faq_display, setIsAllFAQDisplay] = useState(false)

    const all_FAQ_display = (according_to_value) => setIsAllFAQDisplay(according_to_value)


    const FAQDisplayController = () => {
        return (
            <button
                onClick={() => all_FAQ_display(!is_all_faq_display)}
                className="btn btn--see-more"
            >
                <span>{is_all_faq_display ? `See Less` : `See More`}</span>
                <img src={is_all_faq_display ? up_arrow_images_brown : down_arrow_images_brown} alt="see more" />
            </button>
        )
    }

    const FAQList = () => {
        const concated_faq_list = is_all_faq_display ? faq_list : faq_list.slice(0, 3)
        return (concated_faq_list.map((faq, index) =>
            <CardHeaderBody
                key={`${index}-${faq.title}-faq`}
                intro_image={faq.image}
                main_headline={faq.title}
                sub_headline={faq.sub_title}
                content={faq.content}
                background_color={background_colors[index % background_colors.length]}
            >
                {ButtonForSeeAnswerOfFAQ()}
            </CardHeaderBody>
        ))
    }

    return (
        <Layout>
            <div
                className="section section--carousel"
                id="home"
            >
                <Carousel
                    // id="home"
                    slide_images={slide_images}
                    total_number_of_slide_images={total_number_of_slide_images}
                />
            </div>

            <div className="section section--main">
                <div className="main-left">
                    <Add add_banner={add_left_image} />
                </div>
                <div className="main-mid">
                    <div id="videos">
                        <div
                            className="wrapper"
                            style={{
                                "margin": "25px 15px 15px 15px",
                                "display": "flex",
                                "justifyContent": "center"

                            }}>
                            <Heading
                                main_headline={"See Videos"}
                            />

                        </div>
                        <div className="video-content">
                            <VideoTabs />
                        </div>
                    </div>

                    <div id="ask-experts">
                        <CardOnlyHeader
                            image={profile_image}
                            headline={"Ask questions about Pre-pregnancy"}
                        >
                            {ButtonForAskQuestionToExperts()}
                        </CardOnlyHeader>
                    </div>

                    <div
                        className="wrapper"
                        style={{
                            "margin": "20px 0px",
                            "display": "flex",
                            "justifyContent": "center"

                        }}>
                        <Add add_banner={add_hr_image} />
                    </div>

                    <div id="faq">
                        <div
                            className="wrapper"
                            style={{
                                "margin": "10px",
                                "display": "flex",
                                "justifyContent": "center"

                            }}>
                            <Heading
                                main_headline={"See FAQ"}
                            />
                        </div>

                        {FAQList()}

                        <div
                            className="wrapper"
                            style={{
                                "margin": "20px",
                                "display": "flex",
                                "justifyContent": "center"

                            }}>
                            {FAQDisplayController()}
                        </div>
                    </div>

                    <div
                        className="wrapper"
                        style={{
                            "margin": "20px 0px",
                            "display": "flex",
                            "justifyContent": "center"

                        }}>
                        <Add add_banner={add_hr_image} />
                    </div>
                </div>

                <div className="main-right">
                    <Add add_banner={add_right_image} />
                </div>
            </div>
        </Layout>
    )
}
export default Home;