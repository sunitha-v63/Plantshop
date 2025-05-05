import React, { useState } from 'react'
import sec1 from '../assets/Image/sec-1.png'
import sec2 from '../assets/Image/sec-2.png'
import sec3 from '../assets/Image/sec-3.png'
import plants1 from '../assets/Image/homeplants1.png'
import plants2 from '../assets/Image/homeplants2.png'
import plants3 from '../assets/Image/homeplants3.png'
import plants4 from '../assets/Image/homeplants4.png'
import { useNavigate } from 'react-router-dom';
import Descripition from '../Components/Descripition'
import Social from '../Components/Social';

function Plants() {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [cartMessage, setCartMessage] = useState('');

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        if (!selectedSize) {
            setCartMessage('Please select a size.');
            return;
        }

        const product = {
            name: 'Pruning Shears',
            price: 1200,
            quantity,
            size: selectedSize,
            image: sec1
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartMessage('Item added to cart!');


        setTimeout(() => {
            setCartMessage('');
            navigate('/cart');
        }, 1000);
    };

    const handleNavigate = () => {
        navigate('/privacy');
    };

    const products = [
        { id: 1, name: 'Commodo Dolor', price: 300, image: plants1 },
        { id: 2, name: 'Sansevieria', price: 270, image: plants2 },
        { id: 3, name: 'Epipremnum Aureum', price: 350, image: plants3 },
        { id: 4, name: 'Ficus Lyrata', price: 140, image: plants4 },
    ];

    const handleAddCart = (item) => {
        const existing = JSON.parse(localStorage.getItem('cart')) || [];
        const found = existing.find(i => i.image === item.image);

        if (found) {
            alert("This item is already in your cart!");
        } else {
            existing.push({ ...item, quantity: 1 });
            localStorage.setItem('cart', JSON.stringify(existing));
            alert("Added to cart!");
            setCartItems(existing);
        }
    };

    const handleAddToWishlist = (item) => {
        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
        const found = existing.find(i => i.image === item.image);

        if (found) {
            alert("This item is already in your wishlist!");
        } else {
            existing.push(item);
            localStorage.setItem('wishlist', JSON.stringify(existing));
            alert("Added to wishlist!");
            setWishlistItems(existing);
        }
    };

    return (
        <>
            <div
                className="container-fluid p-0 m-0"
                style={{
                    backgroundColor: "#EAF6EF",
                    height: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <h2 className="fw-bold">Indoor Plants</h2>
            </div>
            <div className="container my-5">
                <div className="row  align-items-stretch">
                    <div className="col-md-6">
                        <div className="gallery-plant">
                            <img className="sec1 img-grid" src={sec1} alt="img1" />
                            <img className="sec2 img-grid" src={sec2} alt="img2" />
                            <img className="sec3 img-grid" src={sec3} alt="img3" />
                            <img className="sec4 img-grid" src={sec1} alt="img1" />
                        </div>
                    </div>
                    <div className="col-md-6 plant">
                        <h2 className="mb-3">Calatheas</h2>
                        <p className="fs-5 fw-semibold">Each of our product are hand-selected for its unique aesthetic appearance ability to enhance your home...</p>
                        <h4 className="fs-4 fw-semibold">₹ 1200</h4>
                        <p className=" fs-5 fw-semibold">TAX INCLUDED | SHIPPING CALCULATED AT CHECKOUT</p>

                        <div className="d-flex align-items-center my-3">
                            <button className="btn btn-outline-secondary" onClick={handleDecrease}>-</button>
                            <span className="mx-3 fs-5 fw-semibold">{quantity}</span>
                            <button className="btn btn-outline-secondary" onClick={handleIncrease}>+</button>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Sizes:</label>
                            <div className="d-flex gap-3 fs-5 fw-semibold">
                                {['S', 'M', 'L'].map((size) => (
                                    <div
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`border rounded text-center cursor-pointer ${selectedSize === size ? 'bg-success text-white' : 'bg-light'
                                            }`}
                                        style={{ width: '30px', cursor: 'pointer' }}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="btn px-4 py-2 fw-semibold w-50" onClick={handleAddToCart} style={{ backgroundColor: "#0d4f36", color: "white" }}>
                            Add to Cart
                        </button>

                        {cartMessage && (
                            <div className="alert alert-info mt-3" role="alert">
                                {cartMessage}
                            </div>
                        )}

                        <ul className="list-unstyled  mt-4">
                            <li className="mb-2 fs-5 fw-semibold">
                                <i className="bi bi-truck me-2 "></i>
                                Free shipping on all orders over ₹450
                            </li>
                            <li className="mb-2 fs-5 fw-semibold">
                                <i className="bi bi-box-seam me-2"></i>
                                Delivery in 3-4 working days shipping & return
                            </li>
                        </ul>
                        <p className="mb-1 text-success fs-6 fw-semibold" onClick={handleNavigate} style={{ cursor: "pointer" }}>
                            Free delivery and return policies
                        </p>
                        <span
                            style={{
                                display: 'block',
                                width: '250px',
                                height: '1px',
                                backgroundColor: '#28a745',
                                marginTop: '-5px',
                                cursor: 'pointer'
                            }}
                        ></span>

                    </div>
                </div>
            </div>
            <Descripition />

            <div className="container py-5">
                <div className="row">
                    {products.map(prod => (
                        <div key={prod.id} className="col-12 col-sm-6 col-md-3 mb-4">
                            <div className="card text-center h-100 border-0">
                                <div className="card-img-wrapper">
                                    <img
                                        src={prod.image}
                                        className="card-img-top"
                                        alt={prod.name}
                                    />
                                    <div className="card-hover-icons">
                                        <button
                                            className="icon-btn"
                                            onClick={() => handleAddCart({ ...prod, quantity: 1 })}
                                        >
                                            <i className="bi bi-cart3"></i>
                                        </button>
                                        <button
                                            className="icon-btn"
                                            onClick={() => handleAddToWishlist(prod)}
                                        >
                                            <i className="bi bi-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title mb-1 fw-bold">
                                        {prod.name}
                                    </h6>
                                    <p className="card-text fw-bold">${prod.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Social />
        </>
    )
}

export default Plants