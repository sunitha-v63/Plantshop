import React from 'react'
import logo from "../assets/Image/logo.png"

function Footer() {
    return (
        <>
        <footer className="text-white py-4" style={{ backgroundColor: "#0D4F36" }}>
            <div className="container">
                <div className="row text-center text-md-start">
           
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5>Customer Care</h5>
                        <p className='mt-3'>No.5, South Fairlands,<br />
                            Yercaud Main Road, Salem,<br />Tamilnadu</p>
                        <p> +91 90000 91010<br /> +91 98547 54873</p>
                        <p> info@indogreen.com</p>
                    </div>

                    <div className="col-md-6 mb-4 mb-md-0 text-center">
                        <img src={logo} alt="Logo" width="80" className="mb-2" />
                        <p>The seed of gardening is a love that never dies.but<br />  it never grows to the enduring happiness that the <br /> love of gardening provides the nature.</p>
                        <div className="d-flex justify-content-center gap-3 mt-2 fs-4">
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-linkedin"></i>
                            <i className="bi bi-file-music"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h5>Indo-Green</h5>
                        <ul className="list-unstyled mt-3">
                            <li><p>Reg: S1203014054</p></li>
                            <li><p>TIN: 109201GST1204</p></li>
                            <li><p>Privacy Policy</p></li>
                            <li><p>Terms of Use</p></li></ul>      
                            </div>
                </div>
                <div className='horizontalLine mt-4'></div>
                <div className='text-center mt-4'>
                       <h5> Indo-Green  <i className="bi bi-c-circle"></i>2022. All Rights Reserved</h5>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer