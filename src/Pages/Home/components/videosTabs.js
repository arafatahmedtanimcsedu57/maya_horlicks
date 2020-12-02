import React from 'react';

import VideoContent from './videoContent';
import Tabs from './../../../core/Tabs';

import video_image from './../images/video.png';
import video_image_1 from './../images/video_1.png';
import video_image_2 from './../images/video_2.jpg';

const tab_buttons_list = [
    {
        "index": 0,
        "button_name": "Pre Pregnancy",
        "style_class": "pregnancy"
    }, {
        "index": 1,
        "button_name": "During Pregnancy",
        "style_class": "pregnancy"
    }, {
        "index": 2,
        "button_name": "Post Prenancy",
        "style_class": "pregnancy"
    }]


const tabs_content_list = [
    <VideoContent
        video_link={"https://www.youtube.com/watch?v=4XMYmt4qLkc"}
        cover_image={video_image}
        footer_note={"Pre Pregnancy"}
        style_class={"pregnancy"}
    />,
    <VideoContent
        video_link={"https://www.youtube.com/watch?v=h82ltr84_Yg"}
        cover_image={video_image_1}
        footer_note={"During Pregnancy"}
        style_class={"pregnancy"}
    />,
    <VideoContent video_link={"https://www.youtube.com/watch?v=VhrSG-R90QM"}
        cover_image={video_image_2}
        footer_note={"Post Pregnancy"}
        style_class={"pregnancy"}
    />
]


const VideoTabs = () => {
    return (
        <Tabs
            tab_buttons_list={tab_buttons_list}
            tabs_content_list={tabs_content_list}
            style_class={"pregnancy"}
        />
    )
}

export default VideoTabs