import React from 'react'; 

function ItemMenu(props) {
    return (
        <a href={`${props.slug}`} className={`collapsible-header navbar-link-2 waves-effect arrow-r d-flex align-items-center`} >
            <i className="fas fa-gem dark-blue-text"></i> {props.name}
        </a>
    )
};

export default ItemMenu;