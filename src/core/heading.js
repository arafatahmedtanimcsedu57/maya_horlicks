import React from 'react'

const Heading = ({ main_headline, sub_headline }) => {
    return (
        <div className="heading">
            <div className="main-headline">
                {main_headline}
            </div>
            <div className="sub-headline">
                {sub_headline}
            </div>
        </div>
    )
}

export default Heading