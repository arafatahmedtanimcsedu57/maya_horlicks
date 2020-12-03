import React from 'react-dom'

const CardOnlyHeader = ({ image, headline, children, style_class }) => {
    return (
        <div className={`card card--only-header card--only-header--${style_class}`}>

            <img className="card-image" src={image} alt="profile image" />


            <div className="card-action">
                <div className="headline">
                    {headline}
                </div>

                {children}
            </div>
        </div>
    )
}

export default CardOnlyHeader