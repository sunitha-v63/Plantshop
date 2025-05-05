import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function PlantGrid({ title, redirectPath, initialData = [] }) {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('featured');
    const [priceRange, setPriceRange] = useState(200);

    useEffect(() => {
        if (initialData && initialData.length > 0) {
            setProducts(initialData);
        } else {
            fetch('/data.json')
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [initialData]);

    const handlePriceFilter = (e) => setPriceRange(e.target.value);

    const toggleWishlist = (id) => {
        const updated = products.map((p) =>
            p.id === id ? { ...p, wishlist: !p.wishlist } : p
        );
        setProducts(updated);

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const clickedItem = updated.find((p) => p.id === id);
        if (clickedItem.wishlist) {
            if (!wishlist.some((item) => item.id === id)) {
                wishlist.push(clickedItem);
            }
        } else {
            wishlist = wishlist.filter((item) => item.id !== id);
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const index = cart.findIndex((p) => p.id === product.id);
        if (index !== -1) cart[index].quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    };

    const filtered = products.filter((p) => p.price <= priceRange);
    const sorted = [...filtered];
    if (sortOption === 'az') sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortOption === 'za') sorted.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortOption === 'price_low_high') sorted.sort((a, b) => a.price - b.price);
    else if (sortOption === 'price_high_low') sorted.sort((a, b) => b.price - a.price);

    return (
        <>
            <div className="container-fluid p-0 m-0" style={{
                backgroundColor: "#EAF6EF", height: "90px",
                display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <h2 className="fw-bold">{title}</h2>
            </div>

            {/* Sort Dropdown */}
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
                    {/* Filter Panel */}
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

                    {/* Product Cards */}
                    <div className="col-md-9">
                        <div className="row">
                            {sorted.map((item) => (
                                <div className="col-sm-6 col-md-4 mb-4" key={item.id}>
                                    <div className="card card-product h-100 position-relative shadow">
                                        <Link to={redirectPath}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="card-img-top"
                                            />
                                        </Link>
                                        <div className="card-body text-center fw-bold">
                                            <h4 className="fw-bold">{item.name}</h4>
                                            <h4 className="fw-bold">₹ {item.price}</h4>
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
                                                style={{ stroke: "white", strokeWidth: 26 }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlantGrid;
