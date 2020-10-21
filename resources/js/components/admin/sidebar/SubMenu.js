import React from 'react'; 

function SubMenu(prop) {
    const subMenu = prop.subMenu;
    const prefix = prop.prefix;
    console.log(subMenu);
    return (
        <div className="collapsible-body">
            <ul className="list-unstyled">
            {
                subMenu.map( (item, key) => (
                    <li key={key}>
                        <a href={`${prefix}/${item.slug}`} className="waves-effect">{item.name}</a>
                    </li>
                ))
            }
            </ul>
        </div>

    )
};

export default SubMenu;