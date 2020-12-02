import React from 'react'
import ReactPlayer from "react-player";

import play_video_image from './../images/play_video.png';

const VideoContent = ({ video_link, cover_image, footer_note, style_class }) => {
    return (
        <div className={`video-content video-content--${style_class}`}>
            <ReactPlayer
                url={video_link}
                width="100%"
                height="410px"
                playing
                // playing
                playIcon={
                    <button
                        className="btn btn--play-video"
                    >
                        <img src={play_video_image} alt="play video" />
                    </button>
                }
                light={cover_image}
            />
            <div className={`video-content__footer video-content--${style_class}__footer`}>
                <div className="main-foot-note">{footer_note}</div>
                <div className="sub-foot-note">Watch Now</div>
            </div>
        </div>
    )
}

export default VideoContent