import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg  bg-white">
                    <div class="container">
                        <Link class="navbar-brand"><img src="images/Logo-new.webp" alt="" /></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mb-2 mb-lg-0">

                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-brands fa-apple"></i> Grocery
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item"><i class="fa-brands fa-apple"></i> Grocery</Link></li>
                                        <li><Link class="dropdown-item"><i class="fa-solid fa-bread-slice"></i> Bakery</Link></li>
                                        <li><Link class="dropdown-item"><i class="fa-brands fa-apple"></i> Makeup</Link></li>
                                        <li><Link class="dropdown-item"><i class="fa-brands fa-apple"></i> Bag</Link></li>

                                    </ul>
                                </li>

                            </ul>
                            <ul class=" navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link href="" class="nav-link">Shop</Link>
                                </li>
                                <li class="nav-item">
                                    <Link href="" class="nav-link">Offer</Link>
                                </li>
                                <li class="nav-item">
                                    <Link href="" class="nav-link">Contact</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item">Flash Sale</Link></li>

                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link href="" class="btn btn-success btn-sm mx-3">Join</Link>
                                </li>
                                <li class="nav-item">
                                    <Link href="" class="btn btn-success btn-sm">Become a Seller</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navbar;