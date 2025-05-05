import React from 'react'
import insta1 from '../assets/Image/insta1.png'
import insta2 from '../assets/Image/insta2.png'
import insta3 from '../assets/Image/insta3.png'
import insta4 from '../assets/Image/insta4.png'
import insta5 from '../assets/Image/insta5.png'
import insta6 from '../assets/Image/insta6.png'
import insta7 from '../assets/Image/insta7.png'
import insta8 from '../assets/Image/insta8.png'

function ImageGallery() {
  return (
    <>
      <div className="container py-4">
            <h2 className="text-center mb-4 fw-semibold" style={{ color: "#0D4F36" }}>Follow us on Instagram</h2>
            <div className="gallery-grid">
              <img className="box1 img-grid" src={insta1} alt="img1" />
              <img className="box2 img-grid" src={insta2} alt="img2" />
              <img className="box3 img-grid" src={insta3} alt="img3" />
              <img className="box4 img-grid" src={insta4} alt="img4" />
              <img className="box5 img-grid" src={insta5} alt="img5" />
              <img className="box6 img-grid" src={insta6} alt="img6" />
              <img className="box7 img-grid" src={insta7} alt="img7" />
              <img className="box8 img-grid" src={insta8} alt="img8" />
            </div>
          </div>
  </>
  )
}

export default ImageGallery