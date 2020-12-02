import React from 'react';

import footer_background_image from './images/footer_background.png';
import google_play_image from './images/google_play.png';
import app_store from './images/app_store.png';

const Footer = () => {
    return (
        <div className="footer">
            <div
                className="footer--top"
                style={{
                    'backgroundImage': `url(${footer_background_image})`
                }}
            >
                <div className="headline">
                    আমাদের নির্ভরযোগ্য সেবাগুলো পেতে আজই ডাউনলোড করুন মায়া অ্যাপ
                </div>
                <div className="btn-group btn-group--footer">
                    <button className="btn btn--google-play">
                        <img src={google_play_image} alt="google play" />
                    </button>
                    <button className="btn btn btn--app-store">
                        <img src={app_store} alt="app store" />
                    </button>
                </div>

            </div>

            <div className="footer--bottom">
                Copyright: &#9400; 2014 - 2000 Maya Digital Health Pte. Ltd. All rights reserved
            </div>
        </div>
    )
}

export default Footer;