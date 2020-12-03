import React from 'react';

import { getTabButtonsList } from './../utility/_tab_button_list.js';
import { getTabContentsList } from './../utility/_video_content_list';

import Tabs from './../../../core/Tabs';

const tab_buttons_list = getTabButtonsList()
const tab_contents_list = getTabContentsList()

const VideoTabs = () => {
    return (
        <Tabs
            tab_buttons_list={tab_buttons_list}
            tab_contents_list={tab_contents_list}
            style_class={"pregnancy"}
        />
    )
}

export default VideoTabs