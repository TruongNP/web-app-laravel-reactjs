import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/admin/header';
import SideBar from '../../components/admin/sidebar';

function DasbBoard() {
    return (
        <div>
            <Header />
            <SideBar />
        </div>
    );
}

export default DasbBoard;

if (document.getElementById('dashboard')) {
    ReactDOM.render(<DasbBoard />, document.getElementById('dashboard'));
}
