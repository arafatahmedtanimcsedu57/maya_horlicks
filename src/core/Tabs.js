import React, { useState, useEffect } from 'react';

const Tabs = ({ tab_buttons_list, tabs_content_list, style_class }) => {
    const [active_tab, setActiveTab] = useState(0);

    const Button = ({ index, button_name, style_class }) => {
        console.log(index, active_tab)
        return (
            <button
                key={`${index}-${button_name}-button`}
                onClick={() => setActiveTab(index)}
                className={`btn btn--tab btn--${style_class} btn--${style_class}${index == active_tab ? '--active' : ''}`}>
                {button_name}
            </button>
        )
    }

    const ButtonsGroup = () => {
        return tab_buttons_list.map(tab => Button({ ...tab }))
    }

    return (
        <div className={`tabs tabs--${style_class}`}>
            <div className={`tabs__controller tabs--${style_class}__controller`}>
                {ButtonsGroup()}
            </div>

            <div className={`tabs__content tabs--${style_class}__content`}>
                {tabs_content_list[active_tab]}
            </div>
        </div>
    )
}

export default Tabs