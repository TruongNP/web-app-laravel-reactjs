import React from 'react';

function MainContent() {
    return (
        <main className="main">
            <div className="container-fluid pt-5 pl-5 pb-5 pr-5">
                <h1 class="h3 mb-2 text-gray-800">Products</h1>
                <div className="col-12 mb-3 p-0 d-flex justify-content-between">
                    <nav class="nav">
                        <a class="nav-link active" href="#">Export</a>
                        <a class="nav-link" href="#">Import</a>
                        <a class="nav-link" href="#">More Action</a>
                    </nav>
                    <a href="/admin/product/add" class="btn btn-primary bg-primary">Add New</a>
                </div>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="form-check pl-0">
                                    <input type="checkbox" className="form-check-input filled-in" id="check-all" checked />
                                    <label className="form-check-label small text-uppercase card-link-secondary" for="check-all"></label>
                                    </div>
                                </th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div className="form-check pl-0">
                                    <input type="checkbox" className="form-check-input filled-in" id="check-1" />
                                    <label className="form-check-label small text-uppercase card-link-secondary" for="check-1"></label>
                                    </div>
                                </th> 
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>
                                    <button type="button" className="btn btn-dark-green bg-danger btn-sm m-0 py-1 px-2 mr-1 text-light">Delete</button>
                                    <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2 text-light">Edit</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="form-check pl-0">
                                    <input type="checkbox" className="form-check-input filled-in" id="check-2" />
                                    <label className="form-check-label small text-uppercase card-link-secondary" for="check-2"></label>
                                    </div>
                                </th> 
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>
                                    <button type="button" className="btn btn-dark-green bg-danger btn-sm m-0 py-1 px-2 mr-1 text-light">Delete</button>
                                    <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2 text-light">Edit</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="form-check pl-0">
                                    <input type="checkbox" className="form-check-input filled-in" id="check-3" />
                                    <label className="form-check-label small text-uppercase card-link-secondary" for="check-3"></label>
                                    </div>
                                </th> 
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>
                                    <button type="button" className="btn btn-dark-green bg-danger btn-sm m-0 py-1 px-2 mr-1 text-light">Delete</button>
                                    <button type="button" className="btn btn-primary btn-sm m-0 py-1 px-2 text-light">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default MainContent;