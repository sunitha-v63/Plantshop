import React, { useEffect, useState } from 'react';

function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistItems(storedWishlist);
    }, []);

    const removeFromWishlist = (id) => {
        const updated = wishlistItems.filter(item => item.id !== id);
        setWishlistItems(updated);
        localStorage.setItem('wishlist', JSON.stringify(updated));
    };

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const index = cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
            cart[index].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
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
                <h2 className="fw-bold">Wishlist</h2>
            </div>
        <div className="container mt-5">
           
            {wishlistItems.length === 0 ? (
                <p>No items in wishlist.</p>
            ) : (
                <div className="row">
                    {wishlistItems.map(item => (
                        <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card h-100 border-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="card-img-top"
                                    style={{objectFit: 'cover' }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text fw-bold">₹ {item.price}</p>
                                    <button
                                        className="btn btn-success me-2"
                                        onClick={() => addToCart(item)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        className="btn  btn-success"
                                        onClick={() => removeFromWishlist(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}

export default Wishlist;
