import React from 'react';
import footer_background_image from './images/footer_background.png';

const Footer = () => {
    return (
        <div className="footer">
            <div
                className="footer--top"
                style={{
                    'backgroundImage': `url(${footer_background_image})`
                }}>

            </div>

            <div className="footer--bottom">
                Copyright: &#9400; 2014 - 2000 Maya Digital Health Pte. Ltd. All rights reserved
            </div>
        </div>
    )
}

export default Footer;