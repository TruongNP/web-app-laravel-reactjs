import React from 'react';
import { Products } from '../../../../data/admin/products';

function MainContent() {

    const prefixAdmin = '/admin/product';
    
    const productList = Products.filter(p => p.available == true);
    console.log('productList:', productList);

    const categoryProduct = (tags) => {
        const tag = tags.filter(t => t.startsWith('category:'));
        var catName = tag[0].replace('category:', '');

        return catName;
    };

    const deleteProduct = (id) => {
        console.log('id:', id);
    };

    const updateProduct = (id) => {
        console.log('id:', id);
    }

    return (
        <main className="main">
            <div className="container-fluid pt-5 pl-5 pb-5 pr-5">
                <h1 className="h3 mb-2 text-gray-800">Products</h1>
                <div className="col-12 mb-3 p-0 d-flex justify-content-between">
                    <nav className="nav">
                        <a className="nav-link active" href="#">Export</a>
                        <a className="nav-link" href="#">Import</a>
                        <a className="nav-link" href="#">More Action</a>
                    </nav>
                    <a href="/admin/product/add" className="btn btn-primary bg-primary">Add New</a>
                </div>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="form-check pl-0">
                                    <input type="checkbox" className="form-check-input filled-in" id="check-all"  />
                                    <label className="form-check-label small text-uppercase card-link-secondary"  htmlFor="check-all"></label>
                                    </div>
                                </th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Available</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productList.map((item, index) => {
                                    return (
                                    <tr key={index}>
                                        <th scope="row">
                                            <div className="form-check pl-0">
                                            <input type="checkbox" className="form-check-input filled-in" id="check-1" />
                                            <label className="form-check-label small text-uppercase card-link-secondary" htmlFor="check-1"></label>
                                            </div>
                                        </th> 
                                        <td><a href={`${prefixAdmin}/${item.handle}`}><img src={item.feature_image} width="50" alt={item.title} /></a></td>
                                        <td><a href={`${prefixAdmin}/${item.handle}`} className="nav-link">{item.title}</a></td>
                                        <td>{item.price}</td>
                                        <td>{item.available == true ? 'Instock' : 'Outstock'}</td>
                                        <td>{item.inventory_quantity}</td>
                                        <td>{categoryProduct(item.tags)}</td>
                                        <td>
                                            <button type="button" className="btn btn-dark-green bg-danger btn-sm m-0 py-1 px-2 mr-1 text-light" onClick={() => {deleteProduct(item.id)}} >Delete</button>
                                            <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2 text-light" onClick={() => {updateProduct(item.id)}} >Edit</button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default MainContent;