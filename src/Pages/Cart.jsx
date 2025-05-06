import React, { useEffect, useState } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps';
import visa from "../assets/Image/visa.png"
import mastercard from '../assets/Image/mastercard.png';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/shop');
    };
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const discount = 20;
    const delivery = 0;


    const [cardNumber, setCardNumber] = useState('1234 1234 5487 9854');
    const [cvv, setCvv] = useState('123');
    const [expiryDate, setExpiryDate] = useState('12/25');
    const [nameOnCard, setNameOnCard] = useState('viyona');

    const [currentStep, setCurrentStep] = useState('BAG');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [errors, setErrors] = useState({});
    const [bagError, setBagError] = useState('');


    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setSubtotal(total);
    }, []);

    const handleIncrease = (index) => {
        const updated = [...cartItems];
        updated[index].quantity++;
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
        setSubtotal(updated.reduce((sum, item) => sum + item.price * item.quantity, 0));
    };

    const handleDecrease = (index) => {
        const updated = [...cartItems];
        if (updated[index].quantity > 1) {
            updated[index].quantity--;
            setCartItems(updated);
            localStorage.setItem('cart', JSON.stringify(updated));
            setSubtotal(updated.reduce((sum, item) => sum + item.price * item.quantity, 0));
        }
    };

    const removeItem = (index) => {
        const updated = [...cartItems];
        updated.splice(index, 1);
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
        setSubtotal(updated.reduce((sum, item) => sum + item.price * item.quantity, 0));
    };

    const validateAddress = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Enter a valid 10-digit phone number';

        if (!street.trim()) newErrors.street = 'Street address is required';
        if (!city.trim()) newErrors.city = 'City is required';
        if (!country.trim()) newErrors.country = 'Country is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (setter, field) => (e) => {
        setter(e.target.value);
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const handleAddressSubmit = () => {
        if (validateAddress()) {
            setCurrentStep('PAYMENT');
        }
    };

    const handlePayment = () => {
        localStorage.removeItem('cart');
        setCartItems([]);
        setSubtotal(0);
        setCurrentStep('SUCCESS');
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
                    alignItems: "center",
                    fontSize: "20px"
                }}
            ><h2 className="fw-bold">Cart</h2></div>
            <div className="container my-5">
                <CheckoutSteps currentStep={currentStep} />


                {currentStep === 'BAG' && (
                    <div className="row">
                        <div className="col-12 col-md-8">
                            {cartItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="d-flex flex-column flex-md-row mb-4 p-3 rounded shadow-sm align-items-center"
                                    style={{ backgroundColor: "#EAF6EF" }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        width="100"
                                        height="100"
                                        className="me-md-3 mb-2 mb-md-0 rounded cart-img"
                                    />
                                    <div className="flex-grow-1 text-center text-md-start">
                                        <h4>{item.name}</h4>
                                        <p className="fw-semibold mb-1" style={{ fontSize: "19px" }}>
                                            {item.size || 'Default'} Size
                                        </p>
                                        <h5>₹ {item.price}</h5>
                                    </div>
                                    <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-2 mt-md-0">
                                        <button className="btn btn-outline-success" onClick={() => handleDecrease(i)}>-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button className="btn btn-outline-success me-3" onClick={() => handleIncrease(i)}>+</button>
                                        <button className="btn btn-sm" onClick={() => removeItem(i)}>X</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-12 col-md-4 mt-3 mt-md-0">
                            <div className="rounded p-4 cart-summary" style={{ backgroundColor: "#EAF6EF" }}>
                                <h5 className="fw-bold">Subtotal: ₹{subtotal}</h5>
                                <p className="mb-1 fw-bold">Delivery Charges: ₹{delivery}</p>
                                <p className="mb-1 fw-bold">Discount: -₹{discount}</p>
                                <hr className="text" />
                                <h5 className="fw-bold">Total: ₹{subtotal - discount + delivery}</h5>

                                {bagError && <div className="text-danger fw-bold mb-2">{bagError}</div>}
                                <button
                                    className="btn w-100 mt-3"
                                    style={{ backgroundColor: "#0d4f36", color: "white" }}
                                    onClick={() => {
                                        if (cartItems.length === 0) {
                                            setBagError("Your cart is empty. Please add items before proceeding.");
                                        } else {
                                            setBagError('');
                                            setCurrentStep('ADDRESS');
                                        }
                                    }}
                                >
                                    CHECKOUT
                                </button>

                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 'ADDRESS' && (
                    <div className="d-flex justify-content-center">
                        <div className="col-md-6">
                            <h3 className="mb-4">Contact</h3>
                            <div className="mb-3">
                                <input type="text" className="form-control fs-5" style={{ borderColor: 'black' }} placeholder="Enter your Name" value={name} onChange={handleInputChange(setName, 'name')} />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control fs-5" style={{ borderColor: 'black' }} placeholder="Enter Your Phone number" value={phone} onChange={handleInputChange(setPhone, 'phone')} />
                                {errors.phone && <small className="text-danger">{errors.phone}</small>}
                            </div>

                            <h3 className="mb-4">Address</h3>
                            <div className="mb-3">
                                <input type="text" className="form-control fs-5" style={{ borderColor: 'black' }} placeholder="Door no, Building no, Street name" value={street} onChange={handleInputChange(setStreet, 'street')} />
                                {errors.street && <small className="text-danger">{errors.street}</small>}
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control fs-5" style={{ borderColor: 'black' }} placeholder="Your City" value={city} onChange={handleInputChange(setCity, 'city')} />
                                    {errors.city && <small className="text-danger">{errors.city}</small>}
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control fs-5" style={{ borderColor: 'black' }} placeholder="Your Country" value={country} onChange={handleInputChange(setCountry, 'country')} />
                                    {errors.country && <small className="text-danger">{errors.country}</small>}
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-outline-secondary" onClick={() => setCurrentStep('BAG')}>
                                    Back to Bag
                                </button>
                                <button className="btn fs-4" style={{ backgroundColor: "#0d4f36", color: "white" }} onClick={handleAddressSubmit}>
                                    ADD ADDRESS
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 'PAYMENT' && (
                    <div className="row">
                        <div className="col-md-7">
                            <div className="p-4 rounded" style={{ background: "#eaf6ef" }}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="custom-radio">
                                        <input
                                            type="radio"
                                            id="creditCard"
                                            name="payment"
                                            checked
                                            readOnly
                                        />
                                        <label htmlFor="creditCard">Credit Card</label>
                                    </div>
                                    <div>
                                        <img src={visa} alt="visa" style={{ height: '60px', marginRight: '5px' }} />
                                        <img src={mastercard} alt="MasterCard" style={{ height: '30px' }} />
                                    </div>
                                </div>

                                <p className="text-muted mb-4 px-4 fs-6">Save money transfer using bank account <br />Visa, Mastero</p>

                                <div className="mb-3">
                                    <label className="fw-semibold">CREDIT CARD NUMBER</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your card number"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3 position-relative">
                                        <label className="fw-semibold">CVV CODE</label>
                                        <input
                                            type="password"
                                            className="form-control pe-5 fs-4"
                                            placeholder="***"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                        />
                                        <i
                                            className="bi bi-credit-card-2-front text-muted position-absolute fs-4"
                                            style={{
                                                right: '25px',
                                                top: '60%',
                                                transform: 'translateY(-50%)',
                                                pointerEvents: 'none',
                                            }}
                                        ></i>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="fw-semibold">EXPIRY DATE</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="MM/YY"
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-semibold">NAME ON CARD</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name on the card"
                                        value={nameOnCard}
                                        onChange={(e) => setNameOnCard(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="bg-light rounded p-4">
                                <h5 className="mb-3 fw-bold">Subtotal: ₹{subtotal}</h5>
                                <p className="mb-1 fs-6 fw-semibold">Delivery Charges: ₹{delivery}</p>
                                <p className="mb-1 fs-6 fw-semibold">Discount: -₹{discount}</p>
                                <hr />
                                <h5 className="fw-bold">TOTAL: ₹{subtotal - discount + delivery}</h5>

                                <button className="btn w-100 mt-3" style={{ backgroundColor: "#0d4f36", color: "white" }} onClick={handlePayment}>
                                    PROCEED TO PAY
                                </button>
                                <div className="text-center mt-2">
                                    <i className="bi bi-lock-fill me-1"></i> 100% Secure Payments
                                </div>
                            </div>
                            <button className="btn btn-outline-secondary w-100 mt-3" onClick={() => setCurrentStep('ADDRESS')}>
                                Back to Address
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 'SUCCESS' && (
                    <div className="text-center my-5">
                        <div className="display-1 text-success mb-3">
                            <i className="bi bi-check-circle"></i>
                        </div>
                        <h2 className="mt-4 fw-bold">Payment Successful!</h2>
                        <p className="fs-5 fw-bold">Your order has been confirmed by the vendor.<br />Thank you for giving us the opportunity to serve you.</p>
                        <button className="btn fw-bold mt-3" style={{ backgroundColor: "#0d4f36", color: "white" }} onClick={handleClick}>CONTINUE</button>
                    </div>
                )}

            </div>
        </>
    );
}

export default Cart;
