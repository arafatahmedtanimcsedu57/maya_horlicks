const navlink_list = [
    {
        "to": "home",
        "tag_name": "Home"
    },
    {
        "to": "videos",
        "tag_name": "Videos"
    },
    {
        "to": "ask-experts",
        "tag_name": "Ask Question"
    },
    {
        "to": "faq",
        "tag_name": "FAQ"
    },
];


export const getNavLinkList = () => navlink_list;

export const isActive = ({ pathname }, path) => pathname === path ? "--active" : "";