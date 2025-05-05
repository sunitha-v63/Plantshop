import React, { useState } from 'react'
import sec12 from '../assets/Image/sec-12.png'
import sec13 from '../assets/Image/sec-13.png'
import sec14 from '../assets/Image/sec-14.png'
import plants5 from '../assets/Image/plants5.png'
import plants6 from '../assets/Image/plants6.png'
import plants7 from '../assets/Image/plants7.png'
import plants8 from '../assets/Image/plants8.png'
import { useNavigate } from 'react-router-dom';
import Descripition from '../Components/Descripition'
import Social from '../Components/Social';

function Gardendescripition() {
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
            image: sec4
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
    const handleAddCart= (item) => {
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
                <h2 className="fw-bold"> Garden Equipments</h2>
            </div>
            <div className="container my-5">
                <div className="row  align-items-stretch">
                    <div className="col-md-6">
                        <div className="galleryTerrace-plant">
                            <img className="img1 img-grid" src={sec12} alt="img1" />
                            <img className="img2 img-grid" src={sec13} alt="img2" />
                            <img className="img3 img-grid" src={sec14} alt="img3" />
                            <img className="img4 img-grid" src={sec12} alt="img4" />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="col-md-6 plant">
                        <h2 className="mb-3"> Pruning Shears</h2>
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

    {/* Product 5 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card text-center h-100 border-0">
        <div className="card-img-wrapper">
          <img src={plants5} className="card-img-top" alt="Chlorophytum Coso" />
          <div className="card-hover-icons">
            <button
              className="icon-btn"
              onClick={() => handleAddCart({
                name: 'Chlorophytum Coso',
                price: 190,
                image: plants5,
                quantity: 1
              })}
            >
              <i className="bi bi-cart3"></i>
            </button>
            <button
              className="icon-btn"
              onClick={() => handleAddToWishlist({
                name: 'Chlorophytum Coso',
                price: 190,
                image: plants5
              })}
            >
              <i className="bi bi-heart"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title mb-1 fw-bold">Chlorophytum Coso</h6>
          <p className="card-text fw-bold">$190</p>
        </div>
      </div>
    </div>

    {/* Product 6 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card text-center h-100 border-0">
        <div className="card-img-wrapper">
          <img src={plants6} className="card-img-top" alt="Zamioculcas" />
          <div className="card-hover-icons">
            <button
              className="icon-btn"
              onClick={() => handleAddCart({
                name: 'Zamioculcas',
                price: 390,
                image: plants6,
                quantity: 1
              })}
            >
              <i className="bi bi-cart3"></i>
            </button>
            <button
              className="icon-btn"
              onClick={() => handleAddToWishlist({
                name: 'Zamioculcas',
                price: 390,
                image: plants6
              })}
            >
              <i className="bi bi-heart"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title mb-1 fw-bold">Zamioculcas</h6>
          <p className="card-text fw-bold">$390</p>
        </div>
      </div>
    </div>

    {/* Product 7 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card text-center h-100 border-0">
        <div className="card-img-wrapper">
          <img src={plants7} className="card-img-top" alt="Spathiphyllum" />
          <div className="card-hover-icons">
            <button
              className="icon-btn"
              onClick={() => handleAddCart({
                name: 'Spathiphyllum',
                price: 220,
                image: plants7,
                quantity: 1
              })}
            >
              <i className="bi bi-cart3"></i>
            </button>
            <button
              className="icon-btn"
              onClick={() => handleAddToWishlist({
                name: 'Spathiphyllum',
                price: 220,
                image: plants7
              })}
            >
              <i className="bi bi-heart"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title mb-1 fw-bold">Spathiphyllum</h6>
          <p className="card-text fw-bold">$220</p>
        </div>
      </div>
    </div>

    {/* Product 8 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4">
      <div className="card text-center h-100 border-0">
        <div className="card-img-wrapper">
          <img src={plants8} className="card-img-top" alt="Philodendron" />
          <div className="card-hover-icons">
            <button
              className="icon-btn"
              onClick={() => handleAddCart({
                name: 'Philodendron',
                price: 410,
                image: plants8,
                quantity: 1
              })}
            >
              <i className="bi bi-cart3"></i>
            </button>
            <button
              className="icon-btn"
              onClick={() => handleAddToWishlist({
                name: 'Philodendron',
                price: 410,
                image: plants8
              })}
            >
              <i className="bi bi-heart"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title mb-1 fw-bold">Philodendron</h6>
          <p className="card-text fw-bold">$410</p>
        </div>
      </div>
    </div>

  </div>
</div>

            <Social />
        </>
    )
}

export default Gardendescripition