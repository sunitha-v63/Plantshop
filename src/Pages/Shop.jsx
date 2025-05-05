import { Link } from "react-router-dom";
import desk1 from '../assets/Image/desk1.png';
import desk2 from '../assets/Image/desk2.png';
import desk3 from '../assets/Image/desk3.png';
import desk4 from '../assets/Image/desk4.png';
import desk5 from '../assets/Image/desk5.png';
import desk6 from '../assets/Image/desk6.png';
import desk7 from '../assets/Image/desk7.png';
import desk8 from '../assets/Image/desk8.png';


function Shop() {
    return (
        <>
            <div className="container-fluid p-0 m-0" style={{ backgroundColor: "#EAF6EF", height: "90px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h2 className='fw-bold'>Shop By Categories</h2>
            </div>
            <div className="container mt-5">
                <div className="row ">
                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                        <Link to="/indoor-plant">
                            <img src={desk2} className="card-img-top" alt="Image 1" />
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Indoor Plants</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                        <Link to="/terrace">
                            <img src={desk1} className="card-img-top" alt="Image 2" />
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Terrace & Balcony</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                        <Link to="/deskplant">
                            <img src={desk3} className="card-img-top" alt="Image 3" />
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Desk Plants</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                            <Link to="/modernpots">
                            <img src={desk4} className="card-img-top" alt="Image 2" />
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Modern Pots</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                        <Link to="/garden">
                            <img src={desk5} className="card-img-top" alt="Image 3" />
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Garden Equipments</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                        <Link to="/herbal">
                            <img src={desk6} className="card-img-top" alt="Image 2" />
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Herbal Indoor Plants</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                        <Link to="/bonsai">
                            <img src={desk7} className="card-img-top" alt="Image 3" />
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Bonsai Trees</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0">
                        <Link to="/cactus">
                            <img src={desk8} className="card-img-top" alt="Image 3" />
                            </Link>
                            <div className="card-body text-center">
                                <h4 className="card-title fw-bold">Cactus</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop