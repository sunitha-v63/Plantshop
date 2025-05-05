import React, { useState } from "react";
import indoor1 from '../assets/Image/indoor1.png';
import indoor2 from '../assets/Image/indoor2.png';
import indoor3 from '../assets/Image/indoor3.png';
import indoor4 from '../assets/Image/indoor4.png';
import indoor5 from '../assets/Image/indoor5.png';
import indoor6 from '../assets/Image/indoor6.png';
import indoor7 from '../assets/Image/indoor7.png';
import indoor8 from '../assets/Image/indoor8.png';
import indoor9 from '../assets/Image/indoor9.png';
import indoor10 from '../assets/Image/indoor10.png';
import indoor11 from '../assets/Image/indoor11.png';
import indoor12 from '../assets/Image/indoor12.png';
import indoor13 from '../assets/Image/indoor13.png';
import indoor14 from '../assets/Image/indoor14.png';
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Social from "../Components/Social";

function IndoorPlants() {
    const [sortOption, setSortOption] = useState('featured');

    const data = [
        { id: 1, name: "Ficus Lyrata", price: 140, image: indoor1, category: "Indoor Plants", wishlist: false },
        { id: 2, name: "Ficus Lyrata", price: 140, image: indoor2, category: "Indoor Plants", wishlist: false },
        { id: 3, name: "Ficus Lyrata", price: 140, image: indoor3, category: "Indoor Plants", wishlist: false },
        { id: 4, name: "Ficus Lyrata", price: 140, image: indoor4, category: "Indoor Plants", wishlist: false },
        { id: 5, name: "Ficus Lyrata", price: 140, image: indoor5, category: "Indoor Plants", wishlist: false },
        { id: 6, name: "Ficus Lyrata", price: 140, image: indoor6, category: "Indoor Plants", wishlist: false },
        { id: 7, name: "Ficus Lyrata", price: 140, image: indoor7, category: "Indoor Plants", wishlist: false },
        { id: 8, name: "Ficus Lyrata", price: 140, image: indoor8, category: "Indoor Plants", wishlist: false },
        { id: 9, name: "Ficus Lyrata", price: 140, image: indoor9, category: "Indoor Plants", wishlist: false },
        { id: 10, name: "Ficus Lyrata", price: 140, image: indoor10, category: "Indoor Plants", wishlist: false },
        { id: 11, name: "Ficus Lyrata", price: 140, image: indoor11, category: "Indoor Plants", wishlist: false },
        { id: 12, name: "Ficus Lyrata", price: 140, image: indoor12, category: "Indoor Plants", wishlist: false },
        { id: 13, name: "Ficus Lyrata", price: 140, image: indoor13, category: "Indoor Plants", wishlist: false },
        { id: 14, name: "Ficus Lyrata", price: 140, image: indoor14, category: "Indoor Plants", wishlist: false },
    ];

    const [products, setProducts] = useState(data);
    const [priceRange, setPriceRange] = useState(200);

    const handlePriceFilter = (e) => {
        setPriceRange(e.target.value);
    };

    const toggleWishlist = (id) => {
        const updatedProducts = products.map((p) =>
            p.id === id ? { ...p, wishlist: !p.wishlist } : p
        );
        setProducts(updatedProducts);
    
        const clickedItem = updatedProducts.find((p) => p.id === id);
    
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
        if (clickedItem.wishlist) {
            // Add to wishlist if not already there
            const exists = wishlist.some((item) => item.id === id);
            if (!exists) {
                wishlist.push(clickedItem);
            }
        } else {
            // Remove from wishlist
            wishlist = wishlist.filter((item) => item.id !== id);
        }
    
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };
    

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    };

    const filteredProducts = products.filter((p) => p.price <= priceRange);

    const sortedProducts = [...filteredProducts];
    if (sortOption === 'az') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'za') {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'price_low_high') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price_high_low') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <>
            <div className="container-fluid p-0 m-0" style={{
                backgroundColor: "#EAF6EF",
                height: "90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h2 className="fw-bold">Indoor Plants</h2>
            </div>

            <div className="d-flex align-items-center justify-content-end mb-3 fs-5" style={{ marginTop: "7%", marginRight: "10%" }}>
                <span className="fw-bold me-2">Sort by:</span>
                <Dropdown onSelect={(value) => setSortOption(value)}>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        {{
                            featured: 'Featured',
                            best_selling: 'Best Selling',
                            az: 'A-Z',
                            za: 'Z-A',
                            price_low_high: 'Price: Low to High',
                            price_high_low: 'Price: High to Low',
                        }[sortOption] || 'Select'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="featured">Featured</Dropdown.Item>
                        <Dropdown.Item eventKey="best_selling">Best Selling</Dropdown.Item>
                        <Dropdown.Item eventKey="az">Alphabetically, A-Z</Dropdown.Item>
                        <Dropdown.Item eventKey="za">Alphabetically, Z-A</Dropdown.Item>
                        <Dropdown.Item eventKey="price_low_high">Price, Low to High</Dropdown.Item>
                        <Dropdown.Item eventKey="price_high_low">Price, High to Low</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold">FILTER</h5>
                            <i className="bi bi-filter-square-fill fs-5"></i>
                        </div>
                        <hr />
                        <h5 className="fw-bold">Price Range</h5>
                        <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="500"
                            value={priceRange}
                            onChange={handlePriceFilter}
                        />
                        <p>₹ {priceRange}</p>
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            {sortedProducts.map((item) => (
                                <div className="col-sm-6 col-md-4 mb-4" key={item.id}>
                                    <div className="card card-product h-100 position-relative">
                                        <Link to="/plants">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="card-img-top"
                                            />
                                        </Link>
                                        <div className="card-body text-center fw-bold">
                                            <h4 className="fw-bold">{item.name}</h4>
                                            <h4>₹ {item.price}</h4>
                                            <button
                                                className="btn fs-5"
                                                style={{ backgroundColor: "#0d4f36", color: "white" }}
                                                onClick={() => addToCart(item)}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                        <span
                                            className="wishlist-icon position-absolute top-0 end-0 p-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => toggleWishlist(item.id)}
                                        >
                                            <FaHeart
                                                color={item.wishlist ? "red" : "transparent"}
                                                size={20}
                                                style={{
                                                    cursor: "pointer",
                                                    stroke: "white",
                                                    strokeWidth: 26,
                                                }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Social/>
        </>
    );
}

export default IndoorPlants;
