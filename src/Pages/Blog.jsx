import React from 'react'
import blogimg1 from '../assets/Image/blogimg1.png'
import blogimg2 from '../assets/Image/blogimg2.png'
import blogimg3 from '../assets/Image/blogimg3.png'
import blogimg4 from '../assets/Image/blogimg4.png'
import blogimg5 from '../assets/Image/blogimg5.png'
import blogimg6 from '../assets/Image/blogimg6.png'
import blogheader from '../assets/Image/blogheader.png'
import Social from '../Components/Social'
import { useNavigate } from 'react-router-dom'

const cardData = [
 
  {
    image: blogimg1,
    date: "08/04/2025",
    text: " “Welcome to our Plant Care section, where we share expert advice...",
    button: "Read More"
  },
  {
    image: blogimg2,
    date: "22/03/2025",
    text: " “Welcome to our Plant Care section, where we share expert advice...",
    button: "Read More"
  },
  {
    image: blogimg3,
    date: "15/03/2025",
    text: " “Welcome to our Plant Care section, where we share expert advice...",
    button: "Read More"
  },
  {
    image: blogimg4,
    date: "08/04/2025",
    text: " “Welcome to our Plant Care section, where we share expert advice...",
     button: "Read More"
  },
  {
    image: blogimg5,
    date: "22/03/2025",
    text: " “Welcome to our Plant Care section, where we share expert advice...",
    button: "Read More"
  },
  {
    image: blogimg6,
    date: "15/03/2025",
    text: " “Welcome to our Plant Care section, where we share expert advice...",
     button: "Read More"
  }
];
const leftContent = {
  image: blogheader,
  date: " 08/04/2025",
  title:"The Ultimate Guide to Indoor Plants",
  text: "  “Welcome to our Plant Care section, where we share expert advice and practical tips to help you have your trees, and plants healthy and thriving...",
  button: "Read More"
};

const questions = [
  "What are Indoor Plants?",
  "How do you plant indoor plants?",
  "How much light do indoor plants need?",
  "What qualities make for a good indoor plants?",
  "Which indoor plants are easy to take care of?"
];

function Blog() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blogcontent");
  };
  return (
    <>
     <div className="container my-5">
      <div className="row">
        <div className="col-md-7 mb-4">
        <div className="card h-100 border-0" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.19)' }}>
            <img src={leftContent.image} className="card-img-top" alt="React & Bootstrap" />
            <div className="card-body">
            <p className="card-text fw-bold">{leftContent.date}</p>
              <h5 className="card-title fw-bold fs-2">{leftContent.title}</h5>
              <p className="card-text fw-bold fs-5">{leftContent.text}</p>
              <button className="btn" style={{ backgroundColor: "#0D4F36", color: "white" }}  onClick={handleClick}>{leftContent.button}</button>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <h2 className="mb-4">Quick Prefix in this Article:</h2>
          <hr className="mb-4 border border-black border-1 opacity-100" />
          {questions.map((q, index) => (
            <p key={index} className='fw-bold'>{index + 1}. {q}</p>
          ))}
        </div>
      </div>
    </div>
    {/* container2 */}
      <div className="container my-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 border-0">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <p className="card-title fw-bold">{card.date}</p>
                <p className="card-text fw-bold">{card.text}</p>
                <button className="btn" style={{ backgroundColor: "#0D4F36", color: "white" }}  onClick={handleClick}>{card.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* container3 */}
    <Social/>
    </>
  )
}


export default Blog