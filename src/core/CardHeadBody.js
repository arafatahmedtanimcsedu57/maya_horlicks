import React from 'react';

const CardHeaderBody = ({ intro_image, main_headline, sub_headline, content, background_color, style_class, children }) => {
    return (
        <div
            className={`card card--header-body card--header-body--${style_class}`}
            style={{ "background": background_color }}
        >
            <div className={`card__header card--header-body--${style_class}__header`}>
                <div className="intro">
                    <img src={intro_image} alt="intro" />
                    <div className="headline">
                        <div className="headline__main">
                            {main_headline}
                        </div>
                        <div className="headline__sub">
                            {sub_headline}
                        </div>
                    </div>
                </div>

                {children}
            </div>

            <div className={`card__body card--header-body--${style_class}__body`}>
                {content}
            </div>
        </div>
    )
}

export default CardHeaderBody