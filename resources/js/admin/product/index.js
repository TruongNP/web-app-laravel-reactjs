import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/admin/header';
import SideBar from '../../components/admin/sidebar';
import MainContent from '../../components/admin/modules/product';

function Product() {
    return (
        <div>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
}

export default Product;

if (document.getElementById('product')) {
    ReactDOM.render(<Product />, document.getElementById('product'));
}
