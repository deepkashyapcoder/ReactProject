import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useSearchParams } from "react-router-dom";

// Sample product data
const ProductData = [
    {
        products: {
            fruitsVege: [
                { cat: "fruits", name: "Apples", img: "images/products/fruitsVegetable/Apples.webp", prevPrice: 2.00, newPrice: 1.60, weight: "1lb" },
                { cat: "veg", name: "Baby Spinach", img: "images/products/fruitsVegetable/BabySpinach.webp", prevPrice: 5.00, newPrice: 0.60, weight: "1lb" },
                { cat: "fruits", name: "Blueberries", img: "images/products/fruitsVegetable/blueberries.webp", prevPrice: 5.00, newPrice: 3.00, weight: "1lb" },
                { cat: "veg", name: "Brussels Sprout", img: "images/products/fruitsVegetable/BrusselsSprouts.webp", prevPrice: 5.00, newPrice: 3.00, weight: "1lb" },
                { cat: "fruits", name: "Clementines", img: "images/products/fruitsVegetable/Clementines.webp", prevPrice: 5.00, newPrice: 3.00, weight: "1lb" },
                { cat: "veg", name: "Sweet Corn", img: "images/products/fruitsVegetable/Corn.webp", prevPrice: 5.00, newPrice: 3.00, weight: "1lb" },
                { cat: "veg", name: "Cucumber", img: "images/products/fruitsVegetable/Cucumber.webp", prevPrice: 5.00, newPrice: 3.00, weight: "1lb" },
                { cat: "veg", name: "Dates", img: "images/products/fruitsVegetable/Dates.webp", prevPrice: 5.00, newPrice: 3.00, weight: "1lb" },
            ]
        }
    }
];

const Product = () => {
    const [searchParams] = useSearchParams(); // Get search params
    const category = searchParams.get('category'); // Get 'category' parameter

    // Filter products based on category
    const filteredProducts = category === "fruits"
        ? ProductData[0].products.fruitsVege.filter(product => product.cat === "fruits")
        : category === "vegetable"
            ? ProductData[0].products.fruitsVege.filter(product => product.cat === "veg")
            : ProductData[0].products.fruitsVege;

    // Cart state
    const [cart, setCart] = useState({});

    // Handle adding items to the cart
    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[product.name]) {
                newCart[product.name] += 1;  // Increment if item already in cart
            } else {
                newCart[product.name] = 1;  // Add item with quantity 1
            }
            return newCart;
        });
    };

    // Handle removing items from the cart
    const handleRemoveFromCart = (product) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[product.name] > 1) {
                newCart[product.name] -= 1; // Decrement quantity
            } else {
                delete newCart[product.name]; // Remove product if quantity is 0
            }
            return newCart;
        });
    };

    // Calculate the total price of items in the cart
    const calculateTotal = () => {
        let total = 0;
        Object.keys(cart).forEach(productName => {
            const product = ProductData[0].products.fruitsVege.find(p => p.name === productName);
            total += product.newPrice * cart[productName];
        });
        return total.toFixed(2);
    };

    return (
        <>
            {/* CART BUTTON */}
            <div className="bag pe-3">
                <button
                    className="btn btn-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cartOffcanvas"
                    aria-controls="cartOffcanvas"
                >
                    <i className="fa-solid fa-bag-shopping"></i> {Object.keys(cart).length} Items
                </button>
                <div className="p-3 rounded bg-white text-dark">${calculateTotal()}</div>
            </div>

            {/* Offcanvas Cart */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
                <div className="offcanvas-header">
                    <h5 id="cartOffcanvasLabel">Your Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {Object.keys(cart).length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        Object.keys(cart).map((productName) => {
                            const product = ProductData[0].products.fruitsVege.find(p => p.name === productName);
                            const quantity = cart[productName];
                            const totalPrice = (product.newPrice * quantity).toFixed(2);

                            return (
                                <div className="cart-item d-flex justify-content-between mb-3" key={productName}>
                                    <div>
                                        <img src={product.img} alt={productName} style={{ width: "50px", height: "50px" }} />
                                        <span className="ms-2">{productName}</span>
                                    </div>
                                    <div>
                                        <span>{quantity} x ${product.newPrice.toFixed(2)} = ${totalPrice}</span>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-danger rounded-pill" onClick={() => handleRemoveFromCart(product)}>-</button>
                                        <button className="btn btn-outline-success rounded-pill ms-2" onClick={() => handleAddToCart(product)}>+</button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                    <hr />
                    <div className="d-flex justify-content-between">
                        <strong>Total</strong>
                        <strong>${calculateTotal()}</strong>
                    </div>
                </div>
            </div>

            {/* Product List */}
            <div className="container-fluid product mt-4">
                <div className="row">
                    <div className="col-lg-3 vh-100">
                        {/* Sidebar with category links */}
                        <ul className="list-group list-group-flush vh-100">
                            <li className="list-group-item border-0">
                                <Link to="/" className="text-decoration-none text-dark">
                                    <span data-bs-toggle="collapse" data-bs-target="#fruits">Fruits & Vegetables</span><i className="fa-solid fa-angle-down"></i>
                                </Link>
                                <div className="collapse" id="fruits">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item border-0">
                                            <Link to="/?category=fruits" className="text-decoration-none text-dark">Fruits</Link>
                                        </li>
                                        <li className="list-group-item border-0">
                                            <Link to="/?category=vegetable" className="text-decoration-none text-dark">Vegetables</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Other categories like Meat, Snacks, etc. */}
                        </ul>
                    </div>

                    {/* Product List */}
                    <div className="col-lg-9">
                        <div className="row mt-4">
                            {filteredProducts.map((product, index) => (
                                <div className="col-lg-3 mb-4" key={index}>
                                    <div className="card" style={{ height: "400px" }}>
                                        <img src={product.img} className="card-img-top img-fluid" alt={product.name} />
                                        <div className="card-body">
                                            <h6 className="card-title">{product.name}</h6>
                                            <p className="form-text">Weight: {product.weight}</p>
                                            {product.prevPrice && (
                                                <p className="form-text text-muted"><del>${product.prevPrice.toFixed(2)}</del></p>
                                            )}
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <p className="mt-2 fw-bold text-success">${product.newPrice.toFixed(2)}</p>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    {cart[product.name] ? (
                                                        <div className="d-flex align-items-center">
                                                            <button className="btn btn-outline-danger rounded-pill" onClick={() => handleRemoveFromCart(product)}>-</button>
                                                            <span className="mx-2">{cart[product.name]}</span>
                                                            <button className="btn btn-outline-success rounded-pill" onClick={() => handleAddToCart(product)}>+</button>
                                                        </div>
                                                    ) : (
                                                        <button className="btn btn-outline-success rounded-pill" onClick={() => handleAddToCart(product)}>
                                                        <i className="fa-solid fa-basket-shopping"></i> Cart
                                                    </button>

                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ProductList = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ProductList