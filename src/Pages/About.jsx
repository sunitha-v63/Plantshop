import React from 'react'
import ImageGallery from '../Components/ImageGallery'
import Social from '../Components/Social'

function About() {
  return (
    <>
      <div className="container-fluid p-0 m-0" style={{ backgroundColor: "#EAF6EF", height: "90px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2 className='fw-bold'>About us</h2>
      </div>
      <div className="container about-section text-center">
        <h5>INDO-GARDEN.</h5>
        <p>
          3 Years of Iconic Indoor plants sale, Ethnic & Modern Pots collections and Bonsai Trees.
        </p>
        <h5>BIGGER. BETTER. BRANDS.</h5>
        <p>
          Sonee Sports is an inspirational portfolio of well-diversified iconic sports, lifestyle and fashion
          brands presented through unrivaled creativity and innovation. <br />
          At Sonee Sports we deliver branded products, exceptional service, unparalleled customer support and
          operational excellence to create highest value to our customers, employees and suppliers. Through a
          thorough integration of our human resource, state of the art ERP system and E-commerce platform,
        </p>
        <h5>Mission</h5>
        <p>
          Our mission is to improve the performance and lives of sports and physical fitness participants in Maldives.
          We do that by presenting world leading brands, integrated with exceptional service, unparalleled support,
          and operational excellence to facilitate sports and play.
        </p>
        <h5>Vision</h5>
        <p>
          We envision a future where Maldives embraces healthy living as part of our culture <br />Bigger Better Brands
        </p>
        <h5>Health</h5>
        <p>Sonee Sports will invest in promoting healthy lifestyle through play and a sport because healthy people contribute to improving the society by channelling the physical and mental energy geneated from sports to action,creativity, and innovation.</p>
        <h5>Social Change</h5>
        <p>We will invest in the power of sports to bring social changes.Sports provide a powerful platform to advance social changes.Our purpose of transforming the Maldivian Society <br />can only be achieved through inclusivity of all members of the society and the <br />sustainability of the environment in which we live.</p>
        <h5>Joy</h5>
        <p>Sonee Sports will invest in enhancing the lives of a healthy nation by helping people experience the joy of celebrating life. We will redefine social gatherings and healthy <br />eating 2030 initiative & Goals</p>
      </div>
      <ImageGallery />
      <Social />
    </>
  )
}

export default About