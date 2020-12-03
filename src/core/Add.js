import React from 'react'

const Add = ({ add_banner, style_class }) => {
    return (
        <div className={`add add--${style_class}`}>
            <img src={add_banner} alt="add" />
        </div>
    )
}

export default Add;