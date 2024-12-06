import React from "react";

export const BannerDesign = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="banner-heading">Groceries Delivered in 90 Minute</h1>
                        <p className="mt-3">Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <form action="" method="post">
                            <div className="mt-5">
                                <div className="input-group input-group-lg shadow">
                                    <input type="text" className="form-control" placeholder="Search Your Product Form Here" />

                                    <button className="btn btn-success input-group-text"><i class="fa-solid fa-magnifying-glass"></i> Search</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
