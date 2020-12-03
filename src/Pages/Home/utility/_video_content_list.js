import VideoContent from './../components/videoContent';

import video_image from './../images/video.png';
import video_image_1 from './../images/video_1.png';
import video_image_2 from './../images/video_2.jpg';

const tabs_contents_list = [
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

export const getTabContentsList = () => tabs_contents_list