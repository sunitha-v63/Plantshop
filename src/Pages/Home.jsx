import React, { useEffect, useState } from 'react';
import img1 from "../assets/Image/illustration1.png";
import img2 from "../assets/Image/illustration2.png";
import img4 from "../assets/Image/illustration3.png";
import img3 from "../assets/Image/img3.png";
import home1 from '../assets/Image/home1.png'
import home2 from '../assets/Image/home2.png'
import home3 from '../assets/Image/home3.png';
import home4 from '../assets/Image/home4.png';
import desk1 from '../assets/Image/desk1.png';
import desk2 from '../assets/Image/desk2.png';
import desk3 from '../assets/Image/desk3.png';
import feedback1 from '../assets/Image/feedback1.png';
import feedback2 from '../assets/Image/feedback2.png';
import feedback3 from '../assets/Image/feedback3.png';
import plants1 from '../assets/Image/homeplants1.png'
import plants2 from '../assets/Image/homeplants2.png'
import plants3 from '../assets/Image/homeplants3.png'
import plants4 from '../assets/Image/homeplants4.png'
import plants5 from '../assets/Image/homeplants5.png'
import plants6 from '../assets/Image/homeplants6.png'
import plants7 from '../assets/Image/homeplants7.png'
import plants8 from '../assets/Image/homeplants8.png'
import blog1 from '../assets/Image/blog1.png'
import blog2 from '../assets/Image/blog2.png'
import blog3 from '../assets/Image/blog3.png'
import Social from '../Components/Social';
import ImageGallery from '../Components/ImageGallery';
import { useNavigate } from 'react-router-dom';


const feedbacks = [
  {
    name: 'Jessica Taylor',
    title: 'Owner, Architecture',
    image: feedback1,
    text: ' I purchased a Peae Lily and it has transformed my living room! The experts provided excellent care tips, and I appreciate the follow-up support. Everybody in the office loved the unique pieces, and the topnotch quality',
    stars: 5,
  },
  {
    name: 'Micheal Smith',
    title: 'Marketing Manager',
    image: feedback2,
    text: 'I appreciate the detailed care instruction.My plants are growing beatutifully, and it really brightens up my workspace.The plants are not only beautiful but also very affordable.I will definitely be back for more!',
    stars: 5,
  },
  {
    name: 'Sarah Lee',
    title: 'Graphic Artist',
    image: feedback3,
    text: "I brought serval plants for my workspace, and they've created  calming atmosphere for my collegagues.My new plant collections are a selection!",
    stars: 5,
  },
];

const products = [
  { id: 1, name: 'Commodo Dolor', price: 300, image: plants1 },
  { id: 2, name: 'Sansevieria', price: 270, image: plants2 },
  { id: 3, name: 'Epipremnum Aureum', price: 350, image: plants3 },
  { id: 4, name: 'Ficus Lyrata', price: 140, image: plants4 },
  { id: 5, name: 'Chlorophytum Coso', price: 190, image: plants5 },
  { id: 6, name: 'Zamiocilcas', price: 390, image: plants6 },
  { id: 7, name: 'Spathiphyllum', price: 220, image: plants7 },
  { id: 8, name: 'Philodendron', price: 410, image: plants8 },
];


function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/blogcontent');
  };
  const handleto = () => {
    navigate('/shop');
  };
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % feedbacks.length);
        setAnimating(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = feedbacks[index];

  const handleAddToCart = (item) => {
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
      <div className="container-fluid" style={{ backgroundColor: '#EAF6EF' }}>
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-12 col-md-3 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start">
              <img src={img1} alt="Plant Left" className="img-fluid" style={{ maxHeight: "200px" }} />
            </div>
            <div className="col-12 col-md-6 text-center">
              <h2 className="fw-bold mb-3" style={{ color: "#1A1A1A" }}>
                Trees, Plants to Grow in<br />Your Living Room
              </h2>
              <button className="btn btn-success px-4 py-2" onClick={handleto}>Shop Now</button>
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0 d-flex justify-content-center justify-content-md-end">
              <img src={img2} alt="Plant Right" className="img-fluid" style={{ maxHeight: "200px" }} />
            </div>
          </div>
        </div>
      </div>

      {/* container2 */}
      <div className="container-fluid" style={{ backgroundColor: '#EAF6EF' }}>
        <div className="container py-5">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-5 text-center text-md-start" style={{ fontSize: "17px", fontWeight: "600" }}>
              <p>
                A houseplant, also known as a pot plant, potted plant, or indoor plant, is an ornamental plant cultivated indoors for aesthetic or practical purposes. These plants are commonly found in homes, offices, and various indoor spaces, where they contribute natural beauty and improving air quality.
              </p>
              <button
                className="btn mb-4"
                style={{ backgroundColor: 'white', color: '#198754', fontSize: "16px", fontWeight: "600" }}
              >
                Learn More <i className="bi bi-arrow-right"></i>
              </button>
              <div className="d-flex justify-content-center justify-content-md-start gap-4">
                <div>
                  <h5 className="mb-0">200+</h5>
                  <p style={{ fontSize: "16px", fontWeight: "600" }}>Plant Species</p>
                </div>
                <div>
                  <h5 className="mb-0">1.2k+</h5>
                  <p style={{ fontSize: "16px", fontWeight: "600" }}>Members Joined</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 text-center mb-4 mb-md-0">
              <img src={img3} className="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>

      {/* container3 */}
      <div className="container py-5 home-container3">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="text-center">
              <img src={home1} className="img-fluid mb-3" alt="Image" />
              <h5>Garden Care</h5>
              <p>Our Garden Care sector offers expert tips and advice to help you nurture a healthy, beautiful garden you need</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="text-center">
              <img src={home2} className="img-fluid mb-3" alt="Image" />
              <h5>Plant Renovation</h5>
              <p>Our Plant Renovation sector provides expert guidance and transform your plants for a further healthier look</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="text-center">
              <img src={home3} className="img-fluid mb-3" alt="Image" />
              <h5>Seed Supply</h5>
              <p>Our Seed Supply sector offers expert tips and advice to help you nurture a healthy and a vibrant garden</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="text-center">
              <img src={home4} className="img-fluid mb-3" alt="Image" />
              <h5>Watering Garden</h5>
              <p>Our Watering Garden sector provides you esssential tips and techniques for watering your plants, ensuring they thrive and flourish</p>
            </div>
          </div>

        </div>

      </div>

      {/* container4 */}
      <div className="container py-5">
        <div className="text-center mb-4 home-container4">
          <h2>Featured Products</h2>
          <p>Discover our top plants chosen for their beauty and resilence. Add colorful or greenery to
            your garden with these customer favorites. Bring nature's charm home today</p>
          <div className="mt-4">
            <button type="button" className="btn btn-link text-decoration-none fw-semibold " onClick={handleto}>
              All Plants
            </button>
            <span className="text-muted">|</span>
            <button type="button" className="btn btn-link text-decoration-none fw-semibold" onClick={handleto}>
              New Arrivals
            </button>
          </div>
        </div>
        <div className="row">
          {products.map(prod => (
            <div key={prod.id} className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card text-center h-100 border-0">
                <div className="card-img-wrapper">
                  <img src={prod.image} className="card-img-top" alt={prod.name} />
                  <div className="card-hover-icons">
                    <button
                      className="icon-btn"
                      onClick={() => handleAddToCart({ ...prod, quantity: 1 })}
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
                  <h6 className="card-title mb-1 fw-bold">{prod.name}</h6>
                  <p className="card-text fw-bold">${prod.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-3">
          <button className="btn btn-white border-success px-6 py-6 fs-4" style={{ color: "#0D4F36", fontWeight: "bold" }} onClick={handleto}>
            View All<i className="bi bi-arrow-right mx-3"></i>
          </button>
        </div>
      </div>

      {/* container5 */}
      <div className="container-fluid" style={{ backgroundColor: '#EAF6EF' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img src={img4} className="img-fluid rounded" alt="Decorative" />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <h5 className="mb-3 fw-bold" style={{ color: "#0D4F36", fontWeight: "600" }}>
                VARIETY OF CACTI AVAILABLE AT BEST PRICE IN THE TOWN
              </h5>
              <div className=" mt-3 mx-4">
                <button className="btn btn-white text-white border-success mb-4 fw-bold" style={{ backgroundColor: "#0D4F36", padding: "10px 15%", fontSize: "26px" }}>
                  BUY 1,GET 1 50% OFF!
                </button>
              </div>

              <h4 className="mb-3 fw-bold">
                From small desk-sized to tall statement pieces.<br />
                <span className='mx-5'>Free care tips with every purchase.</span>
              </h4>
              <div>
                <button className="btn btn-white border-success px-6 py-6 fs-4" style={{ color: "#0D4F36", fontWeight: "bold", margin: "0 18%" }} onClick={handleto}>
                  Explore More<i className="bi bi-arrow-right mx-3"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* container6 */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 style={{ color: "#0D4F36" }}> Shop by Category</h2>
          <p className='fs-4 fw-400'> Shop by categories to find the perfect plants, trees, and accessories for your indoor garden set-up.
            Discover a wide range of products tailored to yotur gardening needs </p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-0">
              <img src={desk2} className="card-img-top" alt="Image 1" />
              <div className="card-body text-center">
                <h5 className="card-title">Indoor Plants</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0">
              <img src={desk1} className="card-img-top" alt="Image 2" />
              <div className="card-body text-center">
                <h5 className="card-title">Terrace & Balcony</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0">
              <img src={desk3} className="card-img-top" alt="Image 3" />
              <div className="card-body text-center">
                <h5 className="card-title">Desk Plants</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-white border-success px-6 py-6 fs-4" style={{ color: "#0D4F36", fontWeight: "bold" }} onClick={handleto}>
            View All<i className="bi bi-arrow-right mx-3"></i>
          </button>
        </div>
      </div>

      {/* container7 */}
      <div className="container my-5">
        <h3 className="text-center text-success fw-bold">Our Customers Feedback</h3>
        <p className="text-center fs-5 fw-200">
          Here are some of our valuable customers feedback on their purchase with us.<br />
          We value the opinion of our customers and strive to provide the best experience possible.
        </p>

        <div className={`feedback-card p-4 mt-4 mx-auto ${animating ? 'slide-vertical' : ''}`}>
          <div className="d-flex flex-column flex-md-row align-items-center fs-6">
            <img src={current.image} alt={current.name} className="rounded img-fluid feedback-img" />

            <div className="quote-column d-none d-md-flex flex-column align-items-center justify-content-center">
              <span className="quote-icon"><i className="bi bi-quote"></i></span>
              <span className="vertical-line"></span>
            </div>

            <div className="ps-md-4 pt-3 pt-md-0 text-center text-md-start">
              <p className="mb-2">{current.text}</p>
              <h5>{current.name}</h5>
              <p className="text-muted">{current.title}</p>
              <div>
                {[...Array(current.stars)].map((_, index) => (
                  <i key={`filled-${index}`} className="bi bi-star-fill text-warning"></i>
                ))}
                {[...Array(5 - current.stars)].map((_, index) => (
                  <i key={`empty-${index}`} className="bi bi-star text-muted"></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* container8 */}
      <ImageGallery />

      {/* container9 */}
      <Social />

      {/* container10 */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ color: "#0D4F36" }}>Read our BLOG</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">

          <div className="col">
            <div className="card h-100 border-0">
              <img src={blog1} className="card-img-top" alt="Plant 1" />
              <div className="card-body" style={{ backgroundColor: "#EAF6EF" }}>
                <p> 08/04/2025</p>
                <h5 className="card-title fw-bold"> Plant Care Tips & Guides</h5>
                <p className="card-text fw-bold">"Welcome to our Plant Care section, where we share expert advice and practical tips to help you have your trees, and plants healthy and thriving...</p>
                <button className="btn" style={{ backgroundColor: "#0D4F36", color: "white" }} onClick={handleClick}>Read More</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0">
              <img src={blog2} className="card-img-top" alt="Plant 2" />
              <div className="card-body" style={{ backgroundColor: "#EAF6EF" }}>
                <p>22/03/2025</p>
                <h5 className="card-title fw-bold">Bringing the Outdoors In</h5>
                <p className="card-text fw-bold"> “Welcome to our Plant Care section, where we share expert advice and practical tips to help you have your trees, and plants healthy and thriving...</p>
                <button className="btn" style={{ backgroundColor: "#0D4F36", color: "white" }} onClick={handleClick}>Read More</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0">
              <img src={blog3} className="card-img-top" alt="Plant 3" />
              <div className="card-body" style={{ backgroundColor: "#EAF6EF" }}>
                <p> 15/03/2025</p>
                <h5 className="card-title fw-bold"> Indoor Plants & Mental Wellness </h5>
                <p className="card-text fw-bold">“Welcome to our Plant Care section, where we share expert advice and practical tips to help you have your trees, and plants healthy and thriving...</p>
                <button className="btn" style={{ backgroundColor: "#0D4F36", color: "white" }} onClick={handleClick}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
